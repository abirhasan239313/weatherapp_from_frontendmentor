import React from 'react'

const WeatherCard = ({weatherdata,locationdata}) => {
    console.log(weatherdata);

    const date = weatherdata?.current?.time;
  return (
    <div className='max-w-7/12 mx-auto flex gap-12 text-white'>

        <div className='flex flex-col w-full'>

                <div className="bg-[url('/bg-today-large.svg')] w-full    bg-cover bg-center bg-no-repeat rounded-xl px-8 py-20 flex justify-between items-center">

     <div>

                    <p className='text-[26px] font-bold text-white'>{locationdata?.name}, {locationdata?.country}</p>
                    <p className='text-[18px]'>
  {date && new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric"
  })}
</p>

     </div>


     <div className='flex gap-4 items-center'>

        <img src="/icon-sunny.webp" className="w-[110px] " alt="" />

        <p className='text-[44px] font-bold text-white'>{weatherdata?.current?.temperature_2m}° </p>

     </div>
     
        </div>

        <div className='text-[18px]  flex justify-between w-full gap-5 mt-8 text-[#E0E0E0]'>
            <div className='bg-[#232338]  flex-1 rounded-xl px-5 py-3'>

                <p className='mt-3 mb-3'>Feels Like</p>

                <p className='mb-2'>{weatherdata?.current?.apparent_temperature}°</p>

            </div>
            <div className='bg-[#232338] flex-1  rounded-xl px-5 py-3'>

                 <p className='mt-3 mb-3'>Humidity</p>

                <p className='mb-2'>{weatherdata?.current?.relative_humidity_2m}{weatherdata?.current_units?.relative_humidity_2m}</p>

            </div>
            <div className='bg-[#232338] flex-1  rounded-xl px-5 py-3'>


                 <p className='mt-3 mb-3'>Wind</p>


                <p className='mb-2'>{weatherdata?.current?.wind_speed_10m} {weatherdata?.current_units?.wind_speed_10m}</p>

            </div>
            <div className='bg-[#232338] flex-1 rounded-xl px-5 py-3'>


                 <p className='mt-3 mb-3'>Precipitation</p>
                 <p className='mb-2'>{weatherdata?.current?.precipitation} {weatherdata?.current_units?.precipitation}</p>
                 



                

            </div>
        </div>

        </div>
        
              

        {/* <div>
            <p>it's a nothing</p>
        </div> */}

       
    

        

        <div className='bg-red-500 w-[30%]'>

            <p>it's a red one</p>

        </div>
      
    </div>
  )
}

export default WeatherCard
