'use strict'
const nodemailer = require('nodemailer');
require('dotenv').config();
this.Bienvenida = (pnombre, correo = "valentina@gmail.com") => {
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  });
  let mail_options = {
    from: 'CodeLine',
    port: process.env.MAIL_PORT,
    to: correo + "m",
    subject: 'Bienvenido a la aplicación',
    html: `<table border="0" cellpadding="0" cellspacing="0" style="width: 100%" width="100%">
    <tr>
        <td bgcolor="#000d32f2" style="background-color:#000d32f2;padding: 20px 100px;">
            <table class="table" border="0" cellpadding="0" cellspacing="0" style="width: 100%" width="100%"
                align="right">
                <tr>
                    <td class="cell" style="padding-left: 10px">

                        <table border="0" cellpadding="0" cellspacing="0" style="width: 100% !important;min-height: 400px;"
                            width="100%">

                            <td style="padding: 0px 0px 10px 0px">
                                <div style="text-align: -webkit-center;">
                                    <img alt="Hawaii" src="https://www.pngmart.com/files/3/Welcome-PNG-File.png"
                                        style="display: block; height: auto" width="404" />
                                </div>
                            </td>

                            <tr>
                                <td style="padding: 0px 0px 10px 0px">
                                    <div
                                        style="font-family: Tahoma, Geneva, sans-serif;font-size: 14px; color:#ffffff;font-style: normal;font-weight: normal;text-align: center;font-weight: bold;">
                                        Bienvenido a nuestra aplicacion: ${pnombre}. Estamos muy contentos de
                                        tenerte en nuestra familia CodeLearn. Asi que recibe este correo de
                                        bienvenida de parte de nuestro equipo y inicia hoy a realizar todos tus
                                        cursos.
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td style="padding: 0px 0px 20px 0px">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        style="text-align: center; margin-left: auto; margin-right: auto">
                                        <tr>
                                            <td align="center" bgcolor="#2181A5"
                                                style="background-color: #2181A5; padding: 10px; border-radius: 10px; -webkit-border-radius: 10px; -moz-border-radius: 10px">
                                                <a href=${process.env.FRONT_URL}
                                                    style="font-family: Tahoma, Geneva, sans-serif; font-size: 14px; color: #FFFFFF; font-style: normal; text-align: center; text-decoration: none"><span
                                                        style="font-family: Tahoma, Geneva, sans-serif; font-size: 14px; color: #FFFFFF; font-style: normal; text-align: center; text-decoration: none">EXPLORE</span></a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                            <tr>
                                <td style="padding: 0px 0px 10px 0px">
                                    <div
                                        style="font-family: Tahoma, Geneva, sans-serif;font-size: 14px; color:#ffffff;font-style: normal;font-weight: normal;text-align: center;font-style: italic;">
                                        Recuerda que para contactarnos puedes enviar un correo a: ${process.env.MAIL_USERNAME}
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table> `
  };
  transporter.sendMail(mail_options, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('El correo para "Bienvenida" se envío correctamente ' + info.response);
    }
  });
};
this.Password = (link, correo = "valentina@gmail.com") => {
  let transporter2 = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  });
  let mail_options = {
    from: 'CodeLine',
    port: process.env.MAIL_PORT,
    to: correo + "m",
    subject: 'Restablece tu contraseña',
    html: `
    <table border="0" cellpadding="0" cellspacing="0" style="width: 100%" width="100%">
    <tr>
        <td bgcolor="#1e0030f2" style="background-color:#1e0030f2;padding: 20px 100px;">
            <table class="table" border="0" cellpadding="0" cellspacing="0" style="width: 100%" width="100%"
                align="right">
                <tr>
                    <td class="cell" style="padding-left: 10px">

                        <table border="0" cellpadding="0" cellspacing="0"
                            style="width: 100% !important;min-height: 400px;" width="100%">
                            <h2 style="font-family: cursive;color:#ffe000;text-align: center;font-weight: bold;">
                                ¿Olvidaste tu contraseña?
                            </h2>
                            <div style="display: flex;justify-content: space-evenly;">
                                <img alt="Hawaii" src="https://cdn-icons-png.flaticon.com/512/6195/6195696.png"
                                    style="display: block; max-height: 200px" width="auto" />
                                <img alt="Hawaii"
                                    src="https://stories.freepiklabs.com/storage/19513/forgot-password-amico-1951.png"
                                    style="display: block;  max-height: 200px" width="auto" />
                            </div>

                            <tr>
                                <td style="padding: 0px 0px 10px 0px">
                                    <div
                                        style="font-family: Tahoma, Geneva, sans-serif;font-size: 14px; color:#ffffff;font-style: normal;font-weight: normal;text-align: center;font-weight: bold;">
                                        Hola, nos enteramos de que no recuerdas tu contraseña. No te preocupes, has
                                        click en el siguiente link y resetea tu contraseña sin dramas. Si tu no
                                        solicitaste el envio de este correo te pedimos que tomes precauciones y que
                                        cambies de cualquier forma tu contraseña.
                                    </div>
                                </td>
                            </tr>

                            <td style="padding: 0px 0px 20px 0px">
                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                    style="text-align: center; margin-left: auto; margin-right: auto">
                                    <td align="center" bgcolor="#2181A5"
                                        style="background-color: #2181A5; padding: 10px; border-radius: 10px; -webkit-border-radius: 10px; -moz-border-radius: 10px">
                                        <a href=${link}
                                            style="font-family: Tahoma, Geneva, sans-serif; font-size: 14px; color: #FFFFFF; font-style: normal; text-align: center; text-decoration: none"><span
                                                style="font-family: Tahoma, Geneva, sans-serif; font-size: 14px; color: #FFFFFF; font-style: normal; text-align: center; text-decoration: none">CAMBIAR
                                                CONTRASEÑA</span></a>
                                    </td>
                                </table>
                            </td>
                            <tr>
                                <td style="padding: 0px 0px 10px 0px">
                                    <div
                                        style="font-family: Tahoma, Geneva, sans-serif;font-size: 14px; color:#ffffff;font-style: normal;font-weight: normal;text-align: center;font-style: italic;">
                                        Recuerda que para contactarnos puedes enviar un correo a: ${process.env.MAIL_USERNAME}
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
        `
  };
  transporter2.sendMail(mail_options, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('El correo para "Cambio de contraseña" se envío correctamente ' + info.response);
    }
  });
};

this.Premium = (link, correo = "valentina@gmail.com") => {
  let transporter2 = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  });
  let mail_options = {
    from: 'CodeLine',
    port: process.env.MAIL_PORT,
    to: correo + "m",
    subject: 'Restablece tu contraseña',
    html: `
    <table border="0" cellpadding="0" cellspacing="0" style="width: 100%" width="100%">
    <tr>
        <td bgcolor="#1e0030f2" style="background-color:#1e0030f2;padding: 20px 100px;">
            <table class="table" border="0" cellpadding="0" cellspacing="0" style="width: 100%" width="100%"
                align="right">
                <tr>
                    <td class="cell" style="padding-left: 10px">

                        <table border="0" cellpadding="0" cellspacing="0"
                            style="width: 100% !important;min-height: 400px;" width="100%">
                            <h2 style="font-family: cursive;color:#ffe000;text-align: center;font-weight: bold;">
                                ¿Olvidaste tu contraseña?
                            </h2>
                            <div style="display: flex;justify-content: space-evenly;">
                                <img alt="Hawaii" src="https://cdn-icons-png.flaticon.com/512/6195/6195696.png"
                                    style="display: block; max-height: 200px" width="auto" />
                                <img alt="Hawaii"
                                    src="https://stories.freepiklabs.com/storage/19513/forgot-password-amico-1951.png"
                                    style="display: block;  max-height: 200px" width="auto" />
                            </div>

                            <tr>
                                <td style="padding: 0px 0px 10px 0px">
                                    <div
                                        style="font-family: Tahoma, Geneva, sans-serif;font-size: 14px; color:#ffffff;font-style: normal;font-weight: normal;text-align: center;font-weight: bold;">
                                        Hola, nos enteramos de que no recuerdas tu contraseña. No te preocupes, has
                                        click en el siguiente link y resetea tu contraseña sin dramas. Si tu no
                                        solicitaste el envio de este correo te pedimos que tomes precauciones y que
                                        cambies de cualquier forma tu contraseña.
                                    </div>
                                </td>
                            </tr>

                            <td style="padding: 0px 0px 20px 0px">
                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                    style="text-align: center; margin-left: auto; margin-right: auto">
                                    <td align="center" bgcolor="#2181A5"
                                        style="background-color: #2181A5; padding: 10px; border-radius: 10px; -webkit-border-radius: 10px; -moz-border-radius: 10px">
                                        <a href=${link}
                                            style="font-family: Tahoma, Geneva, sans-serif; font-size: 14px; color: #FFFFFF; font-style: normal; text-align: center; text-decoration: none"><span
                                                style="font-family: Tahoma, Geneva, sans-serif; font-size: 14px; color: #FFFFFF; font-style: normal; text-align: center; text-decoration: none">CAMBIAR
                                                CONTRASEÑA</span></a>
                                    </td>
                                </table>
                            </td>
                            <tr>
                                <td style="padding: 0px 0px 10px 0px">
                                    <div
                                        style="font-family: Tahoma, Geneva, sans-serif;font-size: 14px; color:#ffffff;font-style: normal;font-weight: normal;text-align: center;font-style: italic;">
                                        Recuerda que para contactarnos puedes enviar un correo a: ${process.env.MAIL_USERNAME}
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
        `
  };
  transporter2.sendMail(mail_options, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('El correo para "Cambio de contraseña" se envío correctamente ' + info.response);
    }
  });
};
module.export = this;