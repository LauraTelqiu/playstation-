import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
      <nav className='nav'>
        
        <Link className="link" to="/">Home</Link>
        <Link className="link"to="/playstations">Playstations</Link>
      </nav>
      </header>
    </div>
  )
}

export default Navbar;