const router = require("express").Router();

const { deleteUser } = require("../controllers/admin-controllers");

router.post("/deleteUser", deleteUser);

module.exports = router;
