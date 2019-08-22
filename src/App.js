import React, { useState, useEffect } from "react";
import Card from './Components/Card'
import Header from './Components/Header'
import Info from './Components/Info'
import axios from 'axios'; 
import "./App.css";

function App() {

  // Set State
const [data, setData] = useState({});

  // Get Data
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=7yne0ZoBwWkfv7dG0xWcfqDK4BrhowblfXLTvWet')
      .then(returnData => {
        setData(returnData.data);
    })
  },[]);

  return (
    <div className='main-container'>
      <div className="App">
        <Header />
        <Card img={data.img} alt={data.title}/> 
        <Info title={data.title}/>
      </div>
    </div>
  );
}

export default App;
