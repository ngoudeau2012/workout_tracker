const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  totalDuration: {
    type: Number,
    default: 0,
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Enter a exercise type for this exercise",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name for exercise",
      },
      duration: {
        type: Number,
        required: "Enter how long you did this exercise for",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

workoutSchema.methods.calcDuration = function () {
  let duration = 0;

  for (var i = 0; i < this.exercises.length; i++) {
    duration += this.exercises[i].duration;
    console.log(duration)
  }
  
  return duration;
};

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
