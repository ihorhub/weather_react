import React,{useCallback, useEffect,useState} from 'react'
import {usePosition} from './position'



export const DayWeather=()=> { 
    const key ="550016b522e796d4a34c63549a318c92";
    const _url ="http://api.openweathermap.org/data/2.5/forecast/daily?"; 
    const cnt =7   
  
    const {latitude,longitude}=usePosition('')
    const [day,setDay]=useState({})
    const [week,setWeek]=useState({})
    const [city,setCity]=useState('')
      

    const changeHandler = (event) => {
        setCity(event.target.value)
      
      }
   console.log(city)


    const getGeoWeather=useCallback(()=>{     
        
            try{
                return (fetch(`${_url}lat=${latitude}&lon=${longitude}&appid=${key}`))
                .then(res => res.json())
                .then(res=>{setWeek(res)})
            }catch(e){
                console.log(e)          
            }         
        },[latitude, longitude])      
        console.log(week)   

        const getCityWeather=(e)=>{            
            if(key){
                try{
                    return (fetch(`${_url}q=${city}&cnt=${cnt}&cnt=${cnt}&appid=${key}`))
                    .then(res => res.json())
                    .then(res=>{setDay(res)})                    
                }catch(e){
                    console.log(e)
                }  
               setDay('')
            }
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
                 {week.map(el=>(<datalist data={el} key={el.id}/>))} 
       
        
      
            

        </div>
    )
}
     