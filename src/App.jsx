
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import Navbar from "./Components/Navbar.jsx";
import "./index.css"
import PlayStations from "./Components/PlayStations.jsx";
import Playstation from "./Components/Playstation.jsx";

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
        {/* <Route path="/" element={<p className="summary">Abbreviated as PS, the PlayStation is a gaming console first released by Sony on December 3,
        1994. Since its initial release, Sony has created the PlayStation 2, PlayStation 3, PlayStation 4,
        PlayStation 5.For more information click on the playstation link </p>} /> */}
        <Route path="/playstations" element={<PlayStations playstations={playStations} />} />
        <Route path="/playstations/:id" element={<Playstation />} />
      </Routes>
        
    </div>
  );
  }
  

export default App;


