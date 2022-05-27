import { useState, useEffect } from 'react'
import axios from 'axios'

const FinalCountry = ({countries,theIndex}) => {

    const [myWeather, setMyWeather] = useState([])
    const MYKEY = process.env.MYKEY

    useEffect(() => {    
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${countries[theIndex].capital},CA&appid=${MYKEY}`).then(response => {        
          setMyWeather(response.data)   
        })  
    }, []) 
    console.log(myWeather)

    return (
        <div>
            <h1>{countries[theIndex].name.common}</h1>
            <p>capital {countries[theIndex].capital}</p>
            <p>area {countries[theIndex].area}</p>
            <h3>languages:</h3>
            
            <ul>
            {Object.values(countries[theIndex].languages).map(country => (
                <li key={country}>{country}</li>
            ))}
            </ul> 
            <img  src={countries[theIndex].flags.png} height="200" width="270"/>
            <h2>Weather in {myWeather.name}</h2>
            <p>Temprature: {(Math.round((myWeather.main.temp - 273.15) * 100) / 100).toFixed(2)} &deg;C</p>
            <img  src={`http://openweathermap.org/img/wn/${myWeather.weather[0].icon}@2x.png`} height="100" width="100"/>
            <p>Description: {myWeather.weather[0].description}</p>
            <p>Wind: {myWeather.wind.speed} m/s</p>
        </div>
    )
}

export default FinalCountry