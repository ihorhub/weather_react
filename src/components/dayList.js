import React from 'react'

export const DayList=({data})=> {
console.log(data)
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date= new Date(data.dt)
let numberDay=date.getDay()
let day=days[numberDay]



    return (
        <div>   {data.name&& 
            <div>
           <div className="location-box">
           <p className="location">{data.name}</p>                  
            <p className="date">{day}</p>  
            </div>   
                           
           <div className="weather-box ">
           <p className="temp">{Math.round( data.main.temp-273)}°С</p> 
         </div>
          
<div className="weather-main">
           <p className="weather">{data.weather[0].main}</p>
           <p className="humidity">{data.main.humidity}% </p>
            <p className="pressure">{data.main.pressure}mb hPa</p>           
            <p className="wind">{data.wind.speed}m/c</p>  

</div>
            
           </div>
              
        
                    
        }              
        
        </div>
    )
}
