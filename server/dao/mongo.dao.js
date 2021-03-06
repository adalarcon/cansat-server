const express 	  = require('express');
const db          = require('../helper/mongo.client');

module.exports = exports = {

  count: function(collection, params){
    console.log("[dao] count");
    params = params || {};

    var atts = [];
    var filter = {};
    var sort = {};
    if(params.filter){
      filter = {$or :atts};
      for (var i = 0; i < Object.keys(params.filter).length; i++) {
        var o = {};
        var key = Object.keys(params.filter)[i];
        var value = new RegExp(params.filter[Object.keys(params.filter)[i]], "i");
        o[key] = value;
        atts.push(o);
      }
    }
    return new Promise((resolve, reject) => {
       db.count(collection, { query: filter }).then(function(data){
         resolve(data);
       }).catch(function (error) {
         reject(error);
       });
    });
  },

  find: function(collection, params){
    params = params || {};
    params.pager = params.pager || {};
    params.pager.size = parseInt(params.pager.size) || 10;
    params.pager.index = parseInt(params.pager.index) || 1;
    params.sort = params.sort || {};
    params.fields = params.fields || {};

    var atts = [];
    var filter = {};
    var sort = {};
    if(params.filter){
      filter = {$or :atts};
      for (var i = 0; i < Object.keys(params.filter).length; i++) {
        var o = {};
        var key = Object.keys(params.filter)[i];
        var value = new RegExp(params.filter[Object.keys(params.filter)[i]], "i");
        o[key] = value;
        atts.push(o);
      }
    }

    if(params.sort){
      for (var i = 0; i < Object.keys(params.sort).length; i++) {
        params.sort[Object.keys(params.sort)[i]] = parseInt(params.sort[Object.keys(params.sort)[i]] || 1);
      }
      sort = params.sort;
    }

    return new Promise((resolve, reject) => {
       db.find(collection, { query: filter, fields:{}, sort: sort, pager: params.pager }).then(function(data){
         resolve(data);
       }).catch(function (error) {
         reject(error);
       });
    });
  },

  findById: function(collection, id){
    return new Promise((resolve, reject) => {
       db.findById(collection, {id: id}).then(function(data){
         resolve(data);
       }).catch(function (error) {
         reject(error);
       });
    });
  },

  findByUsername: function(collection, username){
    return new Promise((resolve, reject) => {
       db.find(collection, { query: { username: username }, fields: {}, sort: {}} ).then(function(data){
         resolve(data);
       }).catch(function (error) {
         reject(error);
       });
    });
  },

  findByQuery: function(collection, query){
    return new Promise((resolve, reject) => {
       db.find(collection, query ).then(function(data){
         resolve(data);
       }).catch(function (error) {
         reject(error);
       });
    });
  },

  insertOne: function(collection, obj){
    return new Promise((resolve, reject) => {
       db.insertOne(collection, obj).then(function(data){
         obj['_id'] = data.insertedId;
        resolve(obj);
       }).catch(function (error) {
         reject(error);
       });
    });
  },

  insertMany: function(collection, list){
    return new Promise((resolve, reject) => {
       db.insertMany(collection, list).then(function(data){
        resolve(data);
       }).catch(function (error) {
         reject(error);
       });
    });
  },

  updateOne: function(collection, obj){
    return new Promise((resolve, reject) => {
       db.updateOne(collection, obj).then(function(data){
         resolve(data);
       }).catch(function (error) {
         reject(error);
       });
    });
  },

  deleteOne: function(collection, id){
    return new Promise((resolve, reject) => {
       db.deleteOne(collection, id).then(function(data){
         resolve(data);
       }).catch(function (error) {
         reject(error);
       });
    });
  },

  doanload: function(collection, id){
    return new Promise((resolve, reject) => {
       db.doanloadFile(collection, {id: id}).then(function(data){
         resolve(data);
       }).catch(function (error) {
         reject(error);
       });
    });
  },

  insertOneFile: function(collection, obj){
    return new Promise((resolve, reject) => {
       db.insertOneFile(collection, obj).then(function(data){
        resolve(data);
       }).catch(function (error) {
         reject(error);
       });
    });
  },

}
