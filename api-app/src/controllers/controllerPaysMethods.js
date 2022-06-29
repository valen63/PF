const Stripe = require('stripe');
const User = require("../model/modelUser.js");

const payStripe = async (req, res) => {
  const { idUser, plan, amount, id, fecha, idCurso } = req.body;
  try {
    var user = await User.findById(idUser).catch(()=> res.status(500).send({ message: "Usuario invalido", success: false }).send())
    if (user.isPremium && new Date().toString().slice(4, 24) > user.Vencimiento) {
      res.status(404).send({ message: "Ya eres Premium, y no se ha vencido tu ultimo pago, tu proximo pago es el :" + user.Vencimiento, success: false }).end()
      return
    }
    const stripe = new Stripe(process.env.STRIPE_KEY)
    let payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Compra de",
      payment_method: id,
      confirm: true
    }).catch((err)=> res.status(500).send({ message: err.raw.code, success: false }).end())
    if (payment.status === "succeeded") {
      if (plan) {
        var user = await User.findByIdAndUpdate(idUser, {
          isPremium: true,
          Vencimiento: fecha
        }, { new: true })
      } else {
        let filter = user.courses.filter(e => e.course !== null)
        let correccion = filter.map((e) => {
          if (e.course._id.toString() === idCurso) {
            e.completed = true;
            return e
          }
          return e
        })
        var user = await User.findByIdAndUpdate(idUser, {
          courses: correccion,
          Vencimiento: fecha
        }, { new: true })
      }
      res.send({ message: "Genial, tu compra ha sido procesada correctamente", success: true, user }).end()
      return
    }
    res.status(500).send({ message: payment.status, success: false })
  }
  catch (err) {
    console.log(err)
    res.status(500).send({ message: err, success: false })
  }
};
module.exports = { payStripe };
