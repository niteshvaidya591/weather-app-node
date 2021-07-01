import React from "react";

function CurrentCondition(props) {
    return (
        <div>
            <section id="weatherCurrentCondition">
                {props.info != null ? <h3>Current weather condition</h3> : null}
                {props.info != null
                    ? props.info.map((i, j) => (
                        <div key={j}>
                            <div><p>Feels like in C</p><p>{i.FeelsLikeC}</p></div>
                            <div><p>Feels like in F</p><p>{i.FeelsLikeF}</p></div>
                            <div><p>Cloud Cover</p><p>{i.cloudcover}</p></div>
                            <div><p>Humidity</p><p>{i.humidity}</p></div>
                            <div><p>Observed time</p><p>{i.observation_time}</p></div>
                            <div><p>Precip Inches</p><p>{i.precipInches}</p></div>
                            <div><p>Precip MM</p><p>{i.precipMM}</p></div>
                            <div><p>Pressure</p><p>{i.pressure}</p></div>
                            <div><p>Pressure Inches</p><p>{i.pressureInches}</p></div>
                            <div><p>Temp C</p><p>{i.temp_C}</p></div>
                            <div><p>Temp F</p><p>{i.temp_F}</p></div>
                            <div><p>UV index</p><p>{i.uvIndex}</p></div>
                            <div><p>Visibility</p><p>{i.visibility}</p></div>
                            <div><p>Visibility miles</p><p>{i.visibilityMiles}</p></div>
                            <div><p>Weather code</p><p>{i.weatherCode}</p></div>
                            <div><p>Weather Type</p><p>{i.weatherDesc[0].value}</p></div>
                            <div><img src={i.weatherIconUrl[0].value} /></div>
                            <div><p>Wind direction</p><p>{i.winddir16Point}</p></div>
                            <div><p>Wind degree</p><p>{i.winddirDegree}</p></div>
                            <div><p>Wind speed KMPH</p><p>{i.windspeedKmph}</p></div>
                            <div><p>Wind speed Miles</p><p>{i.windspeedMiles}</p></div>
                        </div>
                    ))
                    : null}
            </section>
        </div>
    );
}

export default CurrentCondition;
