const express             = require('express');
const router              = express.Router();
const config              = require('../config/config');
const SecurityMiddleware  = require('../helper/security.middleware');
const LogsCTRL            = require('../controller/logs.controller');

router.get('/api/v1/', (req, res)=>{
  res.json({'version': 1, 'name': config.project.name});
});


router.get('/api/v1/logs', LogsCTRL.find);

module.exports = router;
