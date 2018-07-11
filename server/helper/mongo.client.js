const mongodb     = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID    = require('mongodb').ObjectID;
const GridStore   = require('mongodb').GridStore;
const config      = require('../config/config');
const url         = config.database.url;
const fs          = require('fs');


// Connect
const connection = (closure) => {
    return MongoClient.connect(url, (err, db) => {
        closure(db, err);
    });
};

module.exports = {

  find: (collection, params ) => {
    params = params || {};
    params.pager = params.pager || {};

    var limit = 0;
    var skip = 0;
    if(params.pager.pageIndex && params.pager.pageSize){
      skip = params.pager.pageSize*(params.pager.pageIndex-1);
      limit = params.pager.pageSize;
    }
    return new Promise((resolve, reject) => {
       connection((db, err) => {
           if (err) {
             reject(err);
             return;
           }
           db.collection(collection)
           .find(params.query, params.fields)
           .sort(params.sort)
           .skip(skip)
           .limit(limit)
           .toArray()
           .then((obj) => {
               resolve(obj);
               db.close();
           })
           .catch((err) => {
               reject(err);
               db.close();
           });
       });
    });
  },

  findFiles: (params ) => {
    params = params || {};
    params.pager = params.pager || {};

    var limit = 0;
    var skip = 0;
    if(params.pager.pageIndex && params.pager.pageSize){
      skip = params.pager.pageSize*(params.pager.pageIndex-1);
      limit = params.pager.pageSize;
    }
    return new Promise((resolve, reject) => {
       connection((db, err) => {
         if (err) {
           reject(err);
           return;
         }
         db.fs.files
           .find(params.query)
           .sort(params.sort)
           .skip(skip)
           .limit(limit)
           .toArray()
           .then((obj) => {
               resolve(obj);
               db.close();
           })
           .catch((err) => {
               reject(err);
               db.close();
           });
       });
    });


  },

  findOne: (collection, params ) => {
    params = params || {};
    return new Promise((resolve, reject) => {
       connection((db, err) => {
         if (err) {
           reject(err);
           return;
         }
         db.collection(collection)
         .find(params.query, params.fields)
         .sort(params.sort)
         .toArray()
         .then((obj) => {
             resolve(obj[0]);
             db.close();
         })
         .catch((err) => {
             reject(err);
             db.close();
         });
       });
    });
  },

  findById: (collection, params ) => {
    params = params || {};
    return new Promise((resolve, reject) => {
       connection((db, err) => {
         if (err) {
           reject(err);
           return;
         }
         db.collection(collection)
         .find({_id: new ObjectID(params.id)}, params.fields)
         .sort(params.sort)
         .toArray()
         .then((obj) => {
             resolve(obj[0]);
             db.close();
         })
         .catch((err) => {
             reject(err);
             db.close();
         });
       });
    });
  },

  insertOne: (collection, obj) => {
    return new Promise((resolve, reject) => {
      connection((db, err) => {
        if (err) {
          reject(err);
          return;
        }
        db.collection(collection)
        .insertOne(obj)
        .then((obj) => {
            resolve(obj);
            db.close();
        })
        .catch((err) => {
            reject(err);
            db.close();
        });
      });
    });
  },

  insertOneFile: (collection, obj) => {
    return new Promise((resolve, reject) => {
      connection((db, err) => {
        if (err) {
          reject(err);
          return;
        }
        var gs = new GridStore(db, obj.name, "w", {
          "content_type": obj.mimetype,
          "metadata":{
              "name": obj.name
          }
        });

        gs.open(function(err, gs) {
          gs.write(obj.data, function(error, result){
            if(error) reject(err);
            else{
              resolve(result);
            }
            gs.close();
          });
        });


      });
    });
  },

  doanloadFile: (collection, params) => {
    return new Promise((resolve, reject) => {
      connection((db, err) => {
        if (err) {
          reject(err);
          return;
        }
        var gs = new GridStore(db, params.id, "r");
        gs.open(function(err, gs) {
          gs.read( (err, obj)=>{
            resolve(obj);
            gs.close();
          })
        });
      });
    });
  },

  insertMany: (collection, obj) => {
    return new Promise((resolve, reject) => {
      connection((db, err) => {
        if (err) {
          reject(err);
          return;
        }
        db.collection(collection)
        .insertMany(obj)
        .then((obj) => {
            resolve(obj);
            db.close();
        })
        .catch((err) => {
            reject(err);
            db.close();
        });
      });
    });
  },

  updateOne: (collection, obj) => {
    var id = obj._id;
    delete obj._id;
    return new Promise((resolve, reject) => {
      connection((db, err) => {
          if (err) {
            reject(err);
            return;
          }
          db.collection(collection)
              .updateOne({_id: new ObjectID(id)}, obj)
              .then((obj) => {
                  resolve(obj);
                  db.close();
              })
              .catch((err) => {
                  reject(err);
                  db.close();
              });
      });
    });
  },

  deleteOne: (collection, id) => {
    return new Promise((resolve, reject) => {
      connection((db, err) => {

        if (err) {
          reject(err);
          return;
        }
          db.collection(collection)
          .deleteOne({_id: new ObjectID(id)})
          .then((obj) => {
              resolve(obj);
              db.close();
          })
          .catch((err) => {
              reject(err);
              db.close();
          });
      });
    });
  },

  count: (collection, params) => {
    params = params || {};
    return new Promise((resolve, reject) => {
       connection((db, err) => {
           if (err) {
             reject(err);
             return;
           }
           db.collection(collection)
           .find(params.query)
           .count()
           .then((obj) => {
               resolve(obj);
               db.close();
           })
           .catch((err) => {
               reject(err);
               db.close();
           });
       });
    });
  },

}
