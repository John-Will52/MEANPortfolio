const express = require('express');
const path = require('path');
const parser = require('body-parser');
const app = express();
const PORT = 2020;
app.use(express.static(path.join(__dirname, '/client/dist/client')));
app.use(parser.json());
require('./server/config/mongoose');
require('./server/config/routes')(app);
app.listen(PORT, function(){

  console.log(`Connection at port: ${PORT}`);
})
