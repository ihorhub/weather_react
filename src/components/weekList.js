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
    return day
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
                  src={`${url}${dataWeek.current.weather[0].icon}@2x.png`}
                  alt="icon"
                />
              </p>
            </div>
          </div>
          <div className="week-box">
            {dataWeek.daily.map((item) => (
              <div className="class-week">
                <p className="weekSt">{dayBuilder(item.dt)}</p>
                <p className="weekSt">
                  day:
                  {Math.round(item.temp.day - 273)}°С
                </p>
                <p>
                  <img
                    className="classImg"
                    src={`${url}${item.weather[0].icon}@2x.png`}
                    alt="icon"
                  />
                </p>
                <p className="weekSt">
                  night: {Math.round(item.temp.night - 273)}°С
                </p>
                <p className="weekSt">
                  eve: {Math.round(item.temp.eve - 273)}°С
                </p>
                <p className="weekSt">{item.weather[0].description}</p>
                <p className="weekSt">H: {item.humidity}% </p>
                <p className="weekSt">P: {item.pressure}mb hPa</p>
                <p className="weekSt">Wind: {item.wind_speed}m/c</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
