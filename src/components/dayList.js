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
                 <ul>
            <li>{data.name}</li>                  
            <li>{day}</li>                  
                    
              <li>{Math.round( data.main.temp-273)}°С</li> 
             <li>{Math.round( data.main.feels_like-273)}°С</li>           
             <li>{data.main.humidity}% </li>
            <li>{data.main.pressure}mb hPa</li>
            <li>{data.weather[0].main}</li>
            <li>{data.wind.speed}m/c</li> 
           
        </ul>
                    </div> 
        }              
        
        </div>
    )
}
