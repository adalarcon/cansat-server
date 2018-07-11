const express             = require('express');
const router              = express.Router();
const config              = require('../config/config');

const SecurityMiddleware  = require('../helper/security.middleware');

router.get('/api/v1/', (req, res)=>{
  res.json({'version': 1, 'name': config.project.name});
});

module.exports = router;
