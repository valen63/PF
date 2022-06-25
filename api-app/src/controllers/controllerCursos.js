const { isObjectIdOrHexString } = require("mongoose");
const Course = require("../model/modelCurso");
const User = require("../model/modelUser");
const ErrorResponse = require("../utils/errorResponse.js");

const getCursos = async (req, res, next) => {

  const limit = parseInt(req.query.limit) || 8
  const page = parseInt(req.query.page) || 1

  try {

    const courses = await Course.paginate({ estado: true }, { limit, page })
    res.send(courses)
  } catch (err) {
    next(new ErrorResponse("Error al crear el curso", 500, false));
    console.error(err);
  }
};

const getCursoById = async (req, res, next) => {
  try {
    const course = await Course.findById({_id: req.params.id});
    res.send(course);
    return;
  } catch (err) {
    next(new ErrorResponse("Error al encontrar el curso", 500, false));
    console.error(err);
  }
};

const getCursoName = async (req, res, next) => {
  const $regex = req.params.name;
  try {
    const course = await Course.find({ titulo: { $regex, $options: "i" } });
    if (!course.length) {
      next(new ErrorResponse("Error al este curso no existe el curso", 404, false));
    } else {
      res.send(course);
    }
  } catch (err) {
    next(new ErrorResponse("Error al encontrar el curso", 500, false));
    console.error(err);
  }
};

const createCurso = async (req, res, next) => {
  const body = req.body;
  try {
    const find = await Course.find({titulo: body.titulo})
    if(find.length!==0){res.send(find);}
    else {const course = await new Course(body);
    await course.save();
    res.send(course);}
  } catch (err) {
    next(new ErrorResponse("Error al crear el curso", 500, false));
    console.error(err);
  }
};

const addFavorite = async (req, res, next) => {
  const { idUser, idCurso } = req.body;
  try {
    const usuario = await User.findById({ _id: idUser });
    let find = usuario.courses.find(e => e.course && e.course._id.toString() === idCurso);
    if (find) {
      let correccion = usuario.courses.map(e => { if (e.course._id.toString() === idCurso) { e.isFavorite = true; return e } return e })
      const user = await User.findByIdAndUpdate(
        { _id: idUser },
        { courses: correccion },
        { new: true }
      );
      res.send({ info: "Curso modificado exitosamente", user, success: true }).end();
    }
    if (!find) {
      const user = await User.findByIdAndUpdate(
        { _id: idUser },
        {
          $push: {
            courses: {
              course: { _id: idCurso },
              isFavorite: true,
            },
          },
        },
        { new: true }
      );
      res.send({ info: "Curso añadido exitosamente", user, success: true });
    }


  } catch (err) {
    console.log(err)
    next(new ErrorResponse("Error al añadir favorito el curso", 500, false));
  }
};

const removeFavorite = async (req, res, next) => {
  const { idUser, idCurso } = req.body;

  try {
    const usuario = await User.findById({ _id: idUser })
    let filtrado = usuario.courses.map(e => { if (e.course._id.toString() === idCurso) { e.isFavorite = false } return e })
    const eliminado = await User.findByIdAndUpdate(
      { _id: idUser },
      { courses: filtrado },
      { new: true }
    );

    res.send({ info: "Curso eliminado exitosamente", user: eliminado, success: true });
  } catch (err) {
    next(new ErrorResponse("Error al eliminar el curso", 500, false));
  }
};

const addVotes = async (req, res, next) => {
  const {idCurso, idUser, votes, calificacion } = req.body;
  try {
    const curso = await Course.findByIdAndUpdate(
      { _id: idCurso },
      {
        $push: {
          userVotes: {
            user: idUser,
          },
          votes,
        },calificacion
      },
      { new: true }
    );
    res.send({ info: "Votacion exitosa", curso, success: true });
  } catch (err) {
    console.log(err)
    next(new ErrorResponse("Error al votar el curso", 500, false));
  }
};

module.exports = {
  getCursos,
  getCursoById,
  createCurso,
  getCursoName,
  addFavorite,
  removeFavorite,
  addVotes,
};
