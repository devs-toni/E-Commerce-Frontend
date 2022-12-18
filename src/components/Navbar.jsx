import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext'

const Navbar = () => {

  const { text } = useContext(LanguageContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">BanchiStore</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{text.header.bycicles}</a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to='/login'>{text.header.road}</Link>
                <a className="dropdown-item" href="#">{text.header.mtb}</a>
                <a className="dropdown-item" href="#">{text.header.ebike}</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">{text.header.contact}</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar