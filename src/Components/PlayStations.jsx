import { Link } from 'react-router-dom';

export default function PlayStations({playstations}) {
  
  return (
    <div className="playstations">
        {playstations.sort((a,b)=> a.year-b.year).map((playStation) => (
        <Link className='ps' to={`/playstations/${playStation._id}`} key={playStation._id}>
          <h1>{playStation.name}</h1>
        </Link>
      ))}
    </div>
  )
}
