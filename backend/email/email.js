const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendConfirmationEmail = async (email, tokenEmail) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Confirmation d'inscription",
    html: `<p>Merci de vous êtes inscrit ! Cliquez sur le lien suivant pour confirmer l'inscription : <a href="http://localhost:5173/api/users/verifyMail/${tokenEmail}">Confirmer l'inscription</a></p>`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendConfirmationEmail,
};
