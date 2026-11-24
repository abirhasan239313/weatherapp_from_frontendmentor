"use client"
import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import WeatherCard from './WeatherCard';

const RenderPage = () => {
  const [weather, setWeather] = useState({});

  const [locationdata,setLocationdata] = useState({});
  useEffect(()=>{

    console.log(weather);

  },[weather])
  return (
    <div className='bg-[#030323] min-h-screen'>

        <div className='flex justify-center'>

             <SearchBar weather={weather} setWeather={setWeather} setLocationdata={setLocationdata}></SearchBar>

        </div>

        <div className='mt-[50px] '>

          <WeatherCard weatherdata={weather} locationdata={locationdata}></WeatherCard>

          

        </div>

        

       
      
    </div>
  )
}

export default RenderPage
