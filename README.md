# Weather App

## steps to run the project

### Clone the repository :

> git clone https://github.com/niteshvaidya591/weather-app-node 



### Configuration

create file with the name `config.env` in the configuration directory

    PORT = 5000
    NODE_ENV = production
    CLIENT_URL = http://localhost:5000
    WEATHER_API_URL = https://api.worldweatheronline.com/premium/v1/weather.ashx
    WEATHER_API_KEY = 02075043df314eb6a24183554213006

add the above configuration or your own API details


### Run locally
Run the command in a root directory
>npm install

Run following command to run locally in dev environment
> npm run dev

Run following command to run locally in production environment
> npm start

### To use live url directly for API

> url : https://weather591.herokuapp.com/weather/place
> method : POST
> payload: {
                           "place":"bangalore"
                  }
     
 ### Testing
Test API in postman or use VS extension REST Client to test the API response using the `weather.rest ` file in the test directory 
click on the send request to see the response from the API

or use the local development url:
> http://localhost:5000/weather/place


