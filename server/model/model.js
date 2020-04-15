const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ExampleSchema = new Schema({
  name: {type: String, required:[true, 'Examples need names.'], minlength:[3, 'Example names must be at least 3 characters long.']},
  next: {type: Number, required:[true, 'Examples need amounts'], min:[1, 'Must have at least 1.']},
  }, {timestamps: true});
mongoose.model('Example', ExampleSchema);
