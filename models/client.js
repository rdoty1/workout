const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  age: {type: [Number], required:true},
  weight: {type: [Number], required:true},
  goals: { type: String, required: true }, 
  timeFrame:{type: [Number], required:true},
  daysPerWeek: {type: [Number], required:true},
  workoutLength: {type: [Number], required:true},
  experienceLevel: {type: String, required:true},
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
