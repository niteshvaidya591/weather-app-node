import "./App.css";
import Climate from "./Climate";
import React from "react";
import CurrentCondition from "./CurrentCondition";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { place: "bangalore", info: [], error: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callApi = this.callApi.bind(this);
  }

  componentDidMount() {
    //  this.handleSubmit();
  }
  handleChange(e) {
    this.setState({ place: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    let regex = /[a-zA-Z]+/;

    regex.test(this.state.place)
      ? this.callApi()
      : this.setState({ error: "Invalid city name given", info: [] });
  }

  callApi() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ place: this.state.place }),
    };
    fetch("https://weather591.herokuapp.com/weather/place", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ info: data }));
    this.setState({ error: "" });
  }
  render() {
    return (
      <div id="weatherApp">
        <h1>Weather App</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="weatherSearch">
            Enter the place name to get weather information
          </label>
          <input
            id="weatherSearch"
            value={this.state.place}
            onChange={this.handleChange}
            placeholder="Enter the city name"
          />
          <input type="submit" value="Get Weather Info" />
        </form>
        <div id="weatherInfo">
          {this.state.info.length !== 0 ? (
            <h2>
              You searched for the place &nbsp;"
              <strong>
                {this.state.info?.data?.data?.request.map((i) => {
                  return i.query;
                })}
                "
              </strong>
            </h2>
          ) : (
            <h2 className="error">{this.state.error}</h2>
          )}

          {console.log(this.state.info?.data?.data)}
          <CurrentCondition
            info={
              this.state.info?.data?.data?.current_condition !== ""
                ? this.state.info?.data?.data?.current_condition
                : null
            }
          />
          <Climate
            info={
              this.state.info?.data?.data?.weather !== ""
                ? this.state.info?.data?.data?.weather
                : null
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
