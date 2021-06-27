import React from 'react'

export const DayList=({data})=> {
console.log(data)
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const url = "https://openweathermap.org/img/wn/"


    let date= new Date(data.dt)
let numberDay=date.getDay()
let day=days[numberDay]


    return (
        <div>  
             {data.name&& 
            <div>
           <div className="location-box">
           <p className="location">{data.name} </p>                  
            <p className="date">{day}</p> 
         
            </div>   
                           
           <div className="weather-box ">
           <p className="temp">{Math.round( data.main.temp-273)}°С <img className="" src={`${url}${data.weather[0].icon}@2x.png`} alt ="icon"/></p> 
           
           
         </div>
          
<div className="weather-main">
           
           <p className="humidity">{data.main.humidity}% </p>
            <p className="pressure">{data.main.pressure}mb hPa</p>           
            <p className="wind">{data.wind.speed}m/c</p>  
            <p className="main">{data.weather[0].description}</p>

</div>            
           </div>            
        
                    
        }            
        
        </div>
    )
}
