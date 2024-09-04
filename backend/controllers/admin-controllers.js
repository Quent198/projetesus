const User = require("../models/user.schema");

const deleteUser = async (req, res) => {
  const { adminPassword, userId } = req.body;

  // Clés obligatoire + [!!!] SOLUTION TEMPORAIRE : sécurité pour effectuer cette action
  if (!adminPassword || !userId || !adminPassword === "emaki") {
    return res.status(400).json({
      error: "DELETE_USER_ERROR",
    });
  }

  const user = await User.findByIdAndDelete(userId);
  if (!user) {
    return res.status(400).json({
      error: "DELETE_USER_ERROR",
    });
  }

  return res.status(200).json({ message: "DELETE_USER_SUCCESS" });
};

module.exports = { deleteUser };
