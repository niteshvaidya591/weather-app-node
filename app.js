// Constants
  
const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors');




//  Load Config 
dotenv.config({ path: './configurations/config.env' })

const app = express();

//  Deveopment 
if (process.env.NODE_ENV === 'development') {
    //  CORS request
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))
    //  Logging
    app.use(morgan('dev'))
}
const PORT = process.env.PORT || 5000;

//  Middlewares
app.use(express.json());
//  Routes
app.use('/weather', require('./routes/weatherRoute'));



app.listen(PORT, () => {
    console.log(`App running in ${process.env.NODE_ENV}  on port : ${PORT}`);
});