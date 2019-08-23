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
      	console.log(returnData.data);
        setData(returnData.data);
    })
  },[]);

  return (
    <div className='main-container'>
      <div className="App">
        <Header />
        <Card img={data.hdurl} alt={data.title}/> 
        <Info title={data.title} info={data.explanation}/>
      </div>
     </div>
  );
}

export default App;
