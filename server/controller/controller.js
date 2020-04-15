const mongoose = require('mongoose');
const Example = mongoose.model('Example');
const errorHandler = require('./helper/error-handler');
module.exports = {
  getAll: function(req,res){
      Example.find({})
          .then(data=>res.json(data))
          .catch(errorhandler.bind(res))
  },
  getOne: function(req,res){
      Example.findOne({_id: req.params.id})
          .then(data=>res.json(data))
          .catch(errorhandler.bind(res))
  },
  delete: function(req,res){
      Example.findByIdAndDelete(req.params.id)
          .then(data=>res.json(data))
          .catch(errorhandler.bind(res))
  },
  update: function(req,res){
      const editedExample = {
          name: req.body.name,
      }
      Example.updateOne({_id: req.params.id}, editedExample, {runValidators : true})
          .then(data=>res.json(data))
          .catch(errorhandler.bind(res))
  },
  create: function(req,res){
      const newExample = req.body;
      Example.create(newExample)
          .then(data=>res.json(data))
          .catch(errorhandler.bind(res))
  },
}
