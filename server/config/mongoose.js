const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Example', {useUnifiedTopology:true, useNewUrlParser: true });
let models_path = path.join(__dirname, './../model');
fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js')>=0){
      require (models_path + '/' + file);
  }
})
