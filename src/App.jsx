
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import Navbar from "./Components/Navbar.jsx";
import "./index.css"
import PlayStations from "./Components/PlayStations.jsx";
import Playstation from "./Components/Playstation.jsx";
import Home from "./Components/Home.jsx";

function App() {

  const [playStations, setPlayStations] = useState([])

  let getPlayStations = async () => {
    let data = await axios("https://sony-ps-api.herokuapp.com/api/playstations")
    setPlayStations(data.data)
    
  }

  useEffect(() => {
    getPlayStations()
  }, [])
  
     

  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/playstations" element={<PlayStations playstations={playStations} />} />
        <Route path="/playstations/:id" element={<Playstation />} />
      </Routes>
        
    </div>
  );
  }
  

export default App;


