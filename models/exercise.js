const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    required: "Enter a exercise type for this exercise"
    },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for exercise"
  },
  duration: {
    type: Number,
    required: "Enter how long you did this exercise for"
  },
  weight: {
    type: Number
  },
  reps: {
    type: Number
  },
  sets: {
    type: Number
  },
  distance: {
    type: Number
  }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
