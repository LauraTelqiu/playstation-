import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
      <nav className='nav'>
        
        {/* <Link className='home' to="/">Home</Link> */}
        <Link className='playstations'to="/playstations">Playstations</Link>
      </nav>
      </header>
    </div>
  )
}

export default Navbar;