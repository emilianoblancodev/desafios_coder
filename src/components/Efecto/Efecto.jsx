import React, {useState, useEffect} from 'react'
import axios from 'axios'



const Efecto = () => {

    const url = 'https://api.ipgeolocation.io/ipgeo?apiKey=68f4bc487d6e4a908c424dba93a3d82a'
    
    const [ip, setIp] = useState([])
    
    useEffect(()=>{
        axios.get(url)
            .then(response => {
              const info = response.data;
              setIp(ip);  
              console.log(info.time_zone.current_time)
            
            });
    },[]);


  return (
    <>
      <h1>{info.time_zone.current_time}</h1>
      
      
      
      
    </>
  )
}

export default Efecto