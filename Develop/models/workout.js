const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    workouts: [{
        name: {
        type:String,
        trim:true,
        required:"Enter name of workout"
    },
    weight:{
        type: Number,
        required: "Enter an amount"
    },
    length: {
        type: Number,
        required: "Enter the time for the exercise"
    },
    reps: {
        type: Number,
        required: "Enter an amount"
    },
    intervals:{
        type: Number,
        required: "Enter an amount"
    },
    miles:{
        type: Number,
        required: "Enter how many miles you ran"
    }
    }],
    // records the date when recorded
    date:{
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

// try export the item as object error will proceed to not record on schema 
// if it is not an object 
// try run after linked
module.exports = {Workout};