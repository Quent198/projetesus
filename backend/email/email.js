const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS)

const sendConfirmationEmail = async (email, token) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Confirmation d'inscription",
    html: `<p>Merci de vous être inscrit ! Cliquez sur le lien suivant pour confirmer l'inscription : <a href="http://localhost:5173/verifymail/${token}">Confirmer l'inscription</a>.</p>`,
  };

  await transporter.sendMail(mailOptions);
};

const sendValidationAccount = async (email) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Inscription validée",
    html: `<p>Bienvenue sur notre site ! Cliquez sur le lien pour vous connecter : <a href="http://localhost:5173/login">Se connecter</a>.</p>`,
  };

  await transporter.sendMail(mailOptions);
};

const sendInvalideToken = async (email) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Problème lors de la validation de votre compte.",
    html: `<p>Le temps d'inscription a expiré. Cliquez sur le lien pour vous inscrire à nouveau : <a href="http://localhost:5173/register">S'inscrire</a>.</p>`,
  };

  await transporter.sendMail(mailOptions);
};

const sendResetPasswordEmail = async (email, token) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Esus - Réinitilisation de votre de passe",
    html: `<p>Cliquez sur ce lien afin de réinitialiser votre mot de passe, si vous n'êtes pas à l'origine de cette demande, veuillez nous contacter le plus rapidement possible : <a href="http://localhost:5173/resetPassword/${token}">Réinitialiser votre mot de passe</a>.</p>`,
  };

  await transporter.sendMail(mailOptions);
};


module.exports = {
  sendConfirmationEmail,
  sendValidationAccount,
  sendInvalideToken,
  sendResetPasswordEmail,
};