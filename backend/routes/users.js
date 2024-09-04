const express = require("express");
const router = express.Router();
const protectRoute = require("../middleware/protectRoute");

const {
  signupUser,
  signinUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/user-controllers");

// Route pour l'inscription
router.post("/signup", signupUser);

// Route pour la connexion
router.post("/signin", signinUser);

// Route protégée pour la modification du profil
router.post("/editProfile", protectRoute, (req, res) => {
  // Fonction pour modifier le profil (peut être ajoutée plus tard)
});

// Route pour réinitialiser le mot de passe oublié
router.post("/forgotPassword", forgotPassword);

// Route pour réinitialiser le mot de passe
router.post("/resetPassword", resetPassword);

module.exports = router;


