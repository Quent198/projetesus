const DatabaseLog = require("../models/databaselogs.schema");

const fs = require("fs");
const path = require("path");

const mongoose = require("mongoose");

const addDatabaseLog = async (req) => {
  const newDatabaseLog = await new DatabaseLog({
    ipAddress: req.ip,
    requestCookies: req.cookies,
    requestPath: req.path,
    requestMethod: req.method,
    requestHeaders: req.headers,
    requestBody: req.body,
    requestQuery: req.query,
  });
  await newDatabaseLog.save();
};

const backupDatabase = async () => {
  try {
    // Récupération de toutes les collections de la DB
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupDir = path.join(__dirname, "../../databaseBackups", timestamp);

    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }

    // Pour chaque collection, l'enregistrer dans un fichier JSON
    for (const collection of collections) {
      const collectionName = collection.name;

      let Model;
      // Si modèle de backup déjà existant
      try {
        Model = mongoose.model(collectionName);
      } catch (error) {
        // Créer un nouveau modèle de backup
        Model = mongoose.model(
          collectionName,
          new mongoose.Schema({}, { strict: false }),
          collectionName
        );
      }

      const documents = await Model.find().lean();

      // Exporter la collection en fichier JSON
      const collectionFile = path.join(backupDir, `${collectionName}.json`);
      fs.writeFileSync(
        collectionFile,
        JSON.stringify(documents, null, 2),
        "utf-8"
      );
    }
    console.log("Backup de la DB effectué");
  } catch (error) {
    console.error("Echec du backup de la BDD", error);
  }
};

module.exports = { addDatabaseLog, backupDatabase };
