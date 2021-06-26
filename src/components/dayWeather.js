import React,{useCallback, useEffect,useState} from 'react'
import {usePosition} from './position'
import { DayList } from './dayList';



export const DayWeather=()=> { 
    const key ="550016b522e796d4a34c63549a318c92";
    const _url1 ="https://api.openweathermap.org/data/2.5/onecall?"; 
    const _url2 ="https://api.openweathermap.org/data/2.5/weather?q="; 
    const part ="hourly"   
    const cnt="7"

    const {latitude,longitude}=usePosition({})
    const [day,setDay]=useState([])
    const [week,setWeek]=useState({})
    const [city,setCity]=useState('')
      

    const changeHandler = (event) => {
        setCity(event.target.value)
      
      }
   console.log(city)


    const getGeoWeather=useCallback(()=>{     
        
            try{
                return (fetch(`${_url1}lat=${latitude}&lon=${longitude}&exclude=${part}&appid=${key}`))
                .then(res => res.json())
                .then(res=>{setWeek(res)})
            }catch(e){
                console.log(e)          
            }         
        },[latitude, longitude])      
        console.log(week)   

        const getCityWeather=(e)=>{            
          
                try{
                    return (fetch(`${_url2}${city}&cnt=${cnt}&appid=${key}`))
                    .then(res => res.json())
                    .then(res=>{setDay(res)})                    
                }catch(e){
                    console.log(e)
                }  
               setDay('')
            
       
    }
    console.log(day)

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
                  id="surname"
                  type="text"
                  name="city name"
                  className="search-bar"
                  value={city}
                  onChange={changeHandler}
                />
                            
</div>
<div className="btn-container">
                <button className="btnS" onClick={getCityWeather}> search city</button>
                <button className="btnW" onClick={getGeoWeather}>get geo weather</button> 
</div>

{/* {day.map(el=>(<DayList data={el} key={el.id}/>  ))} */}
<DayList data={day} />  )
  
                              
        </div>
    )
}
     