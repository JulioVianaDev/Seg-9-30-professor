const router = require('express').Router()
const OiController =require('../controllers/oi')

router.get('/oi',OiController.initial)

module.exports= router;