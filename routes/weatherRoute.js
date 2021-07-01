const express = require('express')
const router = express.Router()
const weatherController = require('../controllers/weatherController')


//  @desc   place weather 
//  @route  POST  / 
router.post('/place', weatherController.POST_singleWeather)

//  @desc   place by zipcode
//  @route  GET  /:ID
//router.post('/:zipID',ensureValidId , weatherController.POST_singleWeatherById)


module.exports = router