import './App.css';
import axios from 'axios';

import React, { useEffect, useState } from 'react'

function App() {
const [data, setData] = useState();
let [location, setLocation] = useState('london')
let [place, setPlace] = useState('')
const handleSubmit = (e) => {
  e.preventDefault();
  setLocation(place)
  
}

  useEffect(() => {

    const apiKey = 'bb17da387f79974d18db1ed077d9c0c0'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`

    async function fetchdata() {
     const request = await axios.get(url);
     setData(request.data);
     return request;
    }
    fetchdata();
  },[location]);

  return (
    <div className='App'>
        <form onSubmit={handleSubmit}>
          <label>Location: </label>
          <input 
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
          />
          <button type='submit'>Submit</button>
        </form>
      { data ? <>
        <h1>{data.name}</h1>
        <h2>{data.main.temp}°C, {data.weather[0].main}</h2>
      </> : null}
    </div>
  );
}

export default App
