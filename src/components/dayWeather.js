import React, { useCallback, useEffect, useState } from 'react'
import { usePosition } from './position'
import { DayList } from './dayList'
import { WeekList } from './weekList'

export const DayWeather = () => {
  const key = '550016b522e796d4a34c63549a318c92'
  const _url1 = 'https://api.openweathermap.org/data/2.5/onecall?'
  const _url2 = 'https://api.openweathermap.org/data/2.5/weather?q='
  const part = 'hourly'
  const cnt = 7

  const { latitude, longitude } = usePosition({})
  const [day, setDay] = useState([])
  const [week, setWeek] = useState({})
  const [city, setCity] = useState('')

  const getClear = () => {
    setDay('')
    setWeek('')
  }
  const clearInput = () => {
    document.getElementById('cityName').reset()
  }
  const changeHandler = (event) => {
    setCity(event.target.value)
  }

  const getGeoWeather = useCallback(() => {
    getClear()
    try {
      return fetch(
        `${_url1}lat=${latitude}&lon=${longitude}&exclude=${part}&appid=${key}`
      )
        .then((res) => res.json())
        .then((res) => {
          setWeek(res)
        })
    } catch (e) {
      console.log(e)
    }
  }, [latitude, longitude])
  console.log(week)

  const getCityWeather = (e) => {
    getClear()
    try {
      return fetch(`${_url2}${city}&cnt=${cnt}&appid=${key}`)
        .then((res) => res.json())
        .then((res) => {
          setDay(res)
        })
    } catch (e) {
      console.log(e)
    }
    clearInput()
  }

  useEffect(() => {
    getGeoWeather()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getCityWeather()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="app-style ">
      <div className="search-box">
        <input
          placeholder="Search... "
          id="cityName"
          type="text"
          name="city name"
          className="search-bar"
          value={city}
          onChange={changeHandler}
        />
      </div>
      <div className="btn-container">
        <button className="btnS" onClick={getCityWeather}>
          search city
        </button>
        <button className="btnW" onClick={getGeoWeather}>
          get geo weather
        </button>
        <button className="btnW" onClick={getClear}>
          clear display
        </button>
      </div>

      <DayList data={day} />
      <WeekList dataWeek={week} />
    </div>
  )
}
