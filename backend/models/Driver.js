const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const DriverSchema = new Schema({});

module.exports = Driver = mongoose.model("drivers", DriverSchema);
