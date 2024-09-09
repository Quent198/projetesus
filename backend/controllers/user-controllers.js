const User = require("../models/user.schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  sendConfirmationEmail,
  sendValidationAccount,
  sendInvalideToken,
  sendResetPasswordEmail,
} = require("../email/email");

const createTokenEmail = (email) => {
  return jwt.sign({ email }, process.env.SECRET, { expiresIn: "24h" });
};

const createTokenLogin = (_id, res) => {
  const token = jwt.sign({ _id }, process.env.SECRET, { expiresIn: "15d" });
  res.cookie("jwt", token, {
    maxAge: 31557600000, // 1 an
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
  return token;
};

// Inscription
const signupUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password ) {
    console.log(zadezdz)
    return res.status(400).json({ error: "ACCOUNT_CREATION_ERROR" });
  }
  try {
    const userExists = await User.findOne({ "account.email": email });
    if (userExists) {
      return res.status(400).json({ error: "ACCOUNT_ALREADY_EXISTS" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const token = createTokenEmail(email);
    const newUser = new User({
      profile: { username },
      account: { tokenEmail:token ,email, password: hashPassword },
    });

    await newUser.save();
    await sendConfirmationEmail(email, token.replace(/./g, ","));
    return res.status(200).json({ message: "ACCOUNT_CREATED" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: "ACCOUNT_CREATION_ERROR" });
  }
};

// Connexion
const signinUser = async (req, res) => {
  const { emailUsername, password } = req.body;
  if (!emailUsername || !password) {
    return res.status(400).json({ error: "ACCOUNT_LOGIN_ERROR" });
  }
  try {
    let user;
    if (emailUsername.includes("@")) {
      user = await User.findOne({ "account.email": emailUsername });
    } else {
      user = await User.findOne({ "profile.username": emailUsername });
    }

    if (!user) {
      return res.status(400).json({ error: "INVALID_CREDENTIALS" });
    }

    if (user.account.tokenEmail) {
      return res.status(400).json({ error: "ACCOUNT_NOT_VALIDED" });
    }

    const match = await bcrypt.compare(password, user.account.password);
    if (!match) {
      return res.status(400).json({ error: "INVALID_CREDENTIALS" });
    }

    const tokenLogin = createTokenLogin(user._id, res);
    return res.status(200).json({ user, tokenLogin, message: "LOGIN_SUCCESS" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: "ACCOUNT_LOGIN_ERROR" });
  }
  
};
const verifyMail = async (req, res) => {
    const token = req.params.token;
    const isTokenNull = await User.findOne({ "account.tokenEmail": token });
    console.log(isTokenNull);
    
    const decoded = jwt.verify(token, process.env.SECRET, {
      ignoreExpiration: true,
    });
    console.log(decoded);
    try {
      if (!isTokenNull) {
        res.status(400).json({ message: "Token déjà validé.", status: 400 });
        return;
      }
      if (decoded.exp * 1000 > new Date().getTime()) {
        //Token encore valide
        await User.findOneAndUpdate({ "account.email": decoded.email }, { "account.tokenEmail": null });
        await sendValidationAccount(decoded.email);
        res.json({ message: "Inscription confirmée avec succès", status: 200 });
      } else {
        await User.findOneAndDelete({ "account.email": decoded.email });
        await sendInvalideToken(decoded.email);
        res
          .status(400)
          .json({ message: "Token non valide ou expiré", status: 400 });
      }
    } catch (error) {
      console.error(error);
    }
  };
// Mot de passe oublié
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ "account.email": email });
    if (!user) {
      return res.status(200).json({ error: "Nous avons envoyé un email pour réinitialiser le mot de passe" });
    }
    const token = createTokenEmail(user.account.email);
    user.account.tokenPassword = token;
    await user.save();
    await sendResetPasswordEmail(email, token.replace(/./g, ","));
    return res.status(200).json({ message: "Nous avons envoyé un email pour réinitialiser le mot de passe" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: "PASSWORD_RESET_ERROR" });
  }
};

// Réinitialiser le mot de passe
const resetPassword = async (req, res) => {
  const { token, password } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await User.findOne({ "account.email": decoded.email });
    if (!user || user.account.tokenPassword !== token) {
      return res.status(400).json({ error: "INVALID_TOKEN" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    user.account.password = hashPassword;
    user.account.tokenPassword = null;
    await user.save();
    return res.status(200).json({ message: "PASSWORD_RESET_SUCCESS" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: "PASSWORD_RESET_ERROR" });
  }
};

module.exports = { signupUser, signinUser, forgotPassword, resetPassword, verifyMail };
