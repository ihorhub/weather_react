import React,{useCallback, useEffect,useState} from 'react'
import {usePosition} from './position'
import {Constant} from './constant'


export const DayWeather=()=> { 
    const {key, _url}=Constant
    const [day,setDay]=useState([])
    const {latitude,longitude}=usePosition([])

    
   
    const getDayWeather=useCallback(()=>{
        try{
            return (fetch(`${_url}lat=${latitude}&lon=${longitude}&appid=${key}`))
            .then(res => res.json())
            .then(json=>{setDay(json)})
        }catch(e){
            console.log(e)
        }          
        const getCityWeather=useCallback(()=>{
            try{
                return (fetch(`${_url}lat=${latitude}&lon=${longitude}&appid=${key}`))
                .then(res => res.json())
                .then(json=>{setDay(json)})
            }catch(e){
                console.log(e)
            }  
    },[latitude,longitude])
    console.log(day)
useEffect(() => {
    getDayWeather()   
}, [getDayWeather])
useEffect(() => {
    getCityWeather()
    
}, [])

    return (
        <div>            
 <div className="app-style ">         

         <div className="search-box">
          <input
                  placeholder="Search... "
                  id="surname"
                  type="text"
                  name="city"
                  className="search-bar"
                  value={}
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
     