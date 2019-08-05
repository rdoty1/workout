const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/workoutapp"
);

const clientSeed = [
  {
    firstName: "Ryan",
    lastName: "Doty",
    email: "ryandoty1@outlook.com",
    age: 23,
    weight: 205,
    goals: "Strength", 
    timeFrame:8,
    daysPerWeek: 4,
    workoutLength: 60,
    experienceLevel: "Advanced",
    date: new Date(Date.now())
  },
  {
    firstName: "Alez",
    lastName: "Steinberg",
    email: "asteinberg@outlook.com",
    age: 26,
    weight: 170,
    goals: "Strength", 
    timeFrame:12,
    daysPerWeek: 3,
    workoutLength: 45,
    experienceLevel: "Intermediate",
    date: new Date(Date.now())
  },
  {
    firstName: "Antonio",
    lastName: "Guay",
    email: "aguay1@outlook.com",
    age: 22,
    weight: 190,
    goals: "Strength", 
    timeFrame:6,
    daysPerWeek: 5,
    workoutLength: 80,
    experienceLevel: "Beginner",
    date: new Date(Date.now())
  }

];

db.Client
  .remove({})
  .then(() => db.Client.collection.insertMany(clientSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
