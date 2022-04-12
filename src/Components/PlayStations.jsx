import { Link } from 'react-router-dom';

export default function PlayStations({playstations}) {
  
  return (
    <div className="playstations">
     <p className="summary">Abbreviated as PS, the PlayStation is a gaming console first released by Sony on December 3,
        1994. Since its initial release, Sony has created the PlayStation 2, PlayStation 3, PlayStation 4,
        PlayStation 5.For more information click on the links below </p>
    
      {playstations.map((playStation) => (
        <Link className='ps' to={`/playstations/${playStation._id}`} key={playStation._id}>
          <h1>{playStation.name}</h1>
        </Link>
      ))}
    </div>
  )
}
