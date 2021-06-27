import React from 'react'

export const WeekList = ({ dataWeek }) => {
  const url = 'https://openweathermap.org/img/wn/'

  const dayBuilder = (dd) => {
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    let date = new Date(dd)
    let numberDay = date.getDay()
    let day = days[numberDay]
    return `${day}`
  }

  return (
    <div>
      {dataWeek.current && (
        <div>
          <div className="location-box">
            <p className="location">{dataWeek.timezone}</p>
            <p className="date">{dayBuilder(dataWeek.current.dt)}</p>
            <div className="weather-box ">
              <p className="temp">
                {Math.round(dataWeek.current.temp - 273)}°С
                <img
                  className=""
                  src={`${url}${dataWeek.current.weather[0].icon}@2x.png`}
                  alt="icon"
                />
              </p>
            </div>
          </div>
          <div>
            {dataWeek.daily.map((item) => (
              <div className="class-week">
                <ul>
                  <li>
                    {Math.round(item.temp.day - 273)}°С
                    <img
                      className=""
                      src={`${url}${item.weather[0].icon}@2x.png`}
                      alt="icon"
                    />
                  </li>
                  <li>{Math.round(item.temp.night - 273)}°С</li>
                  <li>{Math.round(item.temp.eve - 273)}°С</li>
                  <li>{item.weather[0].description}</li>
                  <li>{item.humidity}% </li>
                  <li>{item.pressure}mb hPa</li>
                  <li>{item.wind_speed}m/c</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
