import React from 'react'

function Climate(props) {
  return (
    <article>
      {props.info != null ? <h3>Weather Calendar details</h3> :null}
      
      {props.info != null ? <table id="weatherClimate">
        
        <thead>
          <th>Date</th>
          <th>Avg Temp C</th>
          <th>Avg Temp F</th>
          <th>Max Temp C</th>
          <th>Max Temp F</th>
          <th>Min Temp C</th>
          <th>Min Temp F</th>
          <th>Sun Hour</th>
          <th>Total Snow cm</th>
          <th>UV index</th>
        </thead>
        <tbody>
          {props.info.map((i, j) => (
            <tr key={j}>
              <td>{i.date}</td>
              <td>{i.avgtempC}</td>
              <td>{i.avgtempF}</td>
              <td>{i.maxtempC}</td>
              <td>{i.maxtempF}</td>
              <td>{i.mintempC}</td>
              <td>{i.mintempF}</td>
              <td>{i.sunHour}</td>
              <td>{i.totalSnow_cm}</td>
              <td>{i.uvIndex}</td>
            </tr>
          ))
          }
        </tbody>
      </table> : null}

    </article>
  )
}

export default Climate
