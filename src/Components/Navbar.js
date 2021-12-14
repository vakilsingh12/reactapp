import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>props.toggleMode(null)}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode Enable</label>
          </div>
          <div className="d-flex">
             <div className="bg-success rounded mx-3 " onClick={()=>props.toggleMode("success")} style={{width:'30px',height:"30px",cursor:'pointer'}}></div>
             <div className="bg-danger rounded" onClick={()=>props.toggleMode("danger")} style={{width:'30px',height:"30px",cursor:'pointer'}}></div>
             <div className="bg-dark rounded mx-3" onClick={()=>props.toggleMode("dark")} style={{width:'30px',height:"30px",cursor:'pointer'}}></div>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  about: "About Us",
};
