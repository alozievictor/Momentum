import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {WeatherContainer, Temp, City} from './weatherStyled';


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=9.1530&lon=7.3220&appid=1efcda59a82dd867a189f131d676db59&units=imperial'

const Main = () => {

    const [data, setData] = useState(null)

    useEffect(()=>{
        axios.get(url).then((Response) => {
            setData(Response.data)
        }).catch((err) => {
            console.log(err)
        })
    },[]);

    console.log(data);

    if(!data) return null;

  return (
    <WeatherContainer>
        <Temp>{data.main.temp.toFixed(0)}&#176;</Temp>
        <City>kubwa, Abuja</City>
       

    </WeatherContainer>
  )
}

export default Main;