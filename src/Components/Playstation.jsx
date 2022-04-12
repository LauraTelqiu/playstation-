import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Playstation() {
  const [playstation, setPlaystation] = useState({});
  let { id } = useParams();

  useEffect(() => {
    let getPlayStations = async () => {
      let data = await axios(`https://sony-ps-api.herokuapp.com/api/playstations/${id}`)
      setPlaystation(data.data)
    }
    getPlayStations()
  }, [id])

  return (
   <div>
    
      <div className='text'>
      <img className ="image"src={playstation.image} alt="image"/>
      <p>{`Name: ${ playstation.name }`}</p>
      <p>{`Year released: ${playstation.year}`}</p>
      <p>{`Generation: ${ playstation.generation }`}</p>
      <p>{`Games: ${playstation.games}`}</p>
      <p>{`Unit Sold: ${playstation.unitsSold}`}</p>
      </div>   
  </div>
  )
}

export default Playstation;