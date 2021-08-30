


"use strict";
const nodemailer = require("nodemailer");


async function main(texto) {
  try {
    
  
 
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: "cuentaapppresupuesto@gmail.com", 
      pass: "Pass2513", 
    },
  });

  
  let info = await transporter.sendMail({
    to: "alacran.mlr@gmail.com", 
    subject: "Sugerencia de aplicacion", 
    text: texto
  });
  
  return info.messageId;
} catch (error) {
    console.log(error);
}
  
}

main().catch(console.error);

module.exports = {main};