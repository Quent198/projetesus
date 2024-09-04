require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 62700;
const cookieParser = require("cookie-parser");

const cron = require("node-cron");

const {
  addDatabaseLog,
  backupDatabase,
} = require("./controllers/database-controllers");

const usersRoutes = require("./routes/users");
const adminRoutes = require("./routes/admin");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

app.use((req, res, next) => {
  // Enregistrer la requête dans les logs
  console.log(req.path, req.method);
  addDatabaseLog(req);
  next();
});

app.use("/api/users", usersRoutes);
app.use("/api/admin", adminRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to db & listening on port : ${port}`);
    });
  })
  .catch((err) => console.log(err));

// BACKUP

// Toutes les 5 secondes
// cron.schedule("*/5 * * * * *", async () => {

// Toutes les heures
cron.schedule("0 * * * *", async () => {
  backupDatabase();
});
