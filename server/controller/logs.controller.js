const express     = require('express');
const DAO         = require('../dao/mongo.dao');
const appRoot     = require('app-root-path');

const COLLECTION  = "logs";

module.exports = exports = {

  find: function(req, res){
    console.log("[logs][controller] find");
    var params = req.query || {};
    params.sort = {"timestamp":-1};

    console.log(params);

    DAO.find(COLLECTION, params).then(function(data){
			res.json(data);
    }).catch(function (error) {
      res.status(500).json(error);
    });
  },

}
