import React, { useState } from "react";
import Card from './Components/Card'
import Header from './Components/Header'
import Info from './Components/Info'
import axios from 'axios'; 
import "./App.css";

function App() {

  // Set State
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [info, setInfo] = useState('');

  // Get Data
  axios.get('https://api.nasa.gov/planetary/apod?api_key=7yne0ZoBwWkfv7dG0xWcfqDK4BrhowblfXLTvWet')
  .then(returnData => {
    console.log(returnData);
    setTitle(returnData.data.title)
    setImg(returnData.data.hdurl)
    setInfo(returnData.data.explanation)
  })

  return (
    <div className='main-container'>
      <div className="App">
        <Header />
        <Card img={img}/> 
        <Info title={title}/>
      </div>
    </div>
  );
}

export default App;
