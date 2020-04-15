const examples = require('./../controller/controller.js');
module.exports = function(app){
  app.get('/routeName', examples.getAll);
  app.get('/routeName/:id', examples.getOne);
  app.post('/routeName', examples.create);
  app.put('/routeName/:id', examples.update);
  app.delete('/routeName/:id', examples.delete);
}
