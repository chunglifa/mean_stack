console.log('SERVER > MODELS > pet.js');
const mongoose = require("mongoose");


var PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        minlength: [3, 'name must be at least 3 characters']
    },
    type: {
        type: String,
        required: [true, 'type is required'],
        minlength: [3, 'type must be at least 3 characters']
    },
    description: {
        type: String,
        required: [true, 'type is required'],
        minlength: [3, 'description must be at least 3 characters']
    },
    skills: {
        type: Array,
        required: [false, 'skills are not required'],
    },

},
    { timestamps: true }
);

mongoose.model('Pet', PetSchema); //we are setting this schema in our models as Task