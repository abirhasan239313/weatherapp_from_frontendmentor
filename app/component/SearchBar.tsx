"use client"
import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const makesearch=()=>{
    console.log(search);

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=1`)
    .then(res=>res.json())
    .then((dat)=>{
      console.log(dat);
      const lat = dat.results[0].latitude;
      const long = dat.results[0].longitude;
      console.log(lat);
      console.log(long);

      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m`)
      .then(res=>res.json())
      .then(dat=>setWeather(dat))

  })
    .catch(error=>console.log(error))
  }
  return (
    <div className='mt-[50px]'>

      <p className='text-[40px] font-bold mb-[30px] text-center'>How's the sky looking today?</p>

      <div className='flex gap-[16px]'>

          <div className='relative w-[550px]'>

        <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='  Search for a place...' type="text" className='w-full bg-[#232338] h-[60px] pl-[60px] rounded-xl outline-none' />

        <IoIosSearch size={30} className='absolute left-5 top-1/2 -translate-y-1/2'></IoIosSearch>

      </div>

      <button onClick={makesearch} className='bg-[#424FD1] rounded-xl p-[16px]'>Search</button>

      </div>

    

        
      
    </div>
  )
}

export default SearchBar
