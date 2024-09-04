const mongoose = require("mongoose");

const databaseLog = new mongoose.Schema({
  ipAddress: { type: String, required: true },
  requestCookies: { type: Object, required: false },
  requestPath: { type: Object, required: false },
  requestMethod: { type: Object, required: false },
  requestHeaders: { type: Object, required: false },
  requestBody: { type: Object, required: false },
  requestQuery: { type: Object, required: false },
});

module.exports = mongoose.model("DatabaseLogs", databaseLog);
