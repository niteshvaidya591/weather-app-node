
const weatherService = require('../services/weatherService')

POST_singleWeather = async(req, res) => {
    try {
        const data = await weatherService.POST_singleWeather(req.body,res)    
        return res.status(200).json({ status: 200, message: "Service executed", data: data });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

module.exports = {
    POST_singleWeather
}