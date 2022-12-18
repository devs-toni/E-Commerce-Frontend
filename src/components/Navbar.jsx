import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';
import '../css/Navbar.css';

const Navbar = () => {

  const { text } = useContext(LanguageContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/login'>BanchiStore</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{text.header.bycicles}</a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to='/road'>{text.header.road}</Link>
                <Link className="dropdown-item" to='/mtb'>{text.header.mtb}</Link>
                <Link className="dropdown-item" to='/ebike'>{text.header.ebike}</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to='/contact'>{text.header.contact}</Link>
            </li>
          </ul>
          {/*           <form className="d-flex">
            <input className="form-control me-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
        <Link to='/login'><i class="bi bi-person-fill pointer"></i></Link>
      </div>
    </nav>
  )
}

export default Navbar