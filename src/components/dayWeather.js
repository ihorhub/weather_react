import React,{useCallback, useEffect,useState} from 'react'
import {usePosition} from './position'



export const DayWeather=()=> { 
    const key="7f11636c6332ec6d8c717f0d2d6646d9";
    const _url="http://api.openweathermap.org/data/2.5/weather?"; 
   
    const {latitude,longitude}=usePosition([])
    const [day,setDay]=useState([])
    const [city,setCity]=useState()
      

    const changeHandler = (event) => {
        setCity({ ...city, [event.target.city]: event.target.value })
      }
   console.log(city)
    const getDayWeather=useCallback(()=>{
        try{
            return (fetch(`${_url}lat=${latitude}&lon=${longitude}&appid=${key}`))
            .then(res => res.json())
            .then(res=>{setDay(res)})
        }catch(e){
            console.log(e)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }    },[])      
    
        const getCityWeather=()=>{
            try{
                return (fetch(`${_url}q=${city}&appid=${key}`))
                .then(res => res.json())
                .then(res=>{setDay(res)})
            }catch(e){
                console.log(e)
            }  
    }
    console.log(day)

useEffect(() => {
    getDayWeather()   
}, [getDayWeather])

useEffect(() => {
    getCityWeather()
    
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [city])

    return (
        <div>            
 <div className="app-style ">         

         <div className="search-box">
          <input
                  placeholder="Search... "
                  id="surname"
                  type="text"
                  name="city name"
                  className="search-bar"
                  value={city}
                  onChange={changeHandler}
                />
                <button onClick={getCityWeather}> search city</button>
                <button onClick={getDayWeather}>get current weather</button>                
</div>
            <ul>
              <li>{day.name}</li>             
              {/* <li>{day.main}°С</li> */}
              {/* <li>{day.main.feels_like}°С</li> 
               <li>{day.main.humidity}% </li>
              <li>{day.main.pressure}mb hPa</li> */}
              <li></li>
              <li></li>
              <li></li>
          </ul>  
          </div>
      
            

        </div>
    )
}
     