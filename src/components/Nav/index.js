import './styles.css'
import { Link } from "react-router-dom";
import slimetooth from '../../photos/slimetooth.png'

const Nav = () => {

  return (

    <div>
      <div className="col-sm-12 mb-3 " >
        <center><img id='lead-img' src={slimetooth} /></center>
      </div>
      
      <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent ">
        <div className="container-fluid ">
          <Link className="navbar-brand justify-content-center" to="/">Slimetooth Art</Link>

          <button className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav ">

              <li className="nav-item">
                <Link className="nav-link" to="shop">Shop</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="portfolio">Portfolio</Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="contact">Contact</Link>
              </li>


            </ul>
          </div>
        </div>
      </nav>


    </div>
  );
}

export default Nav;
