import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Home from "../HOME/home.component";
import About from "../about/about.component";
import Service from "../services/service.component";
import Patientportal from "../patient_portal/patient_portal.component";
import Testimonials from "../testimonials/testimonials";
import Faq from "../faq/faq.component";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import './navigation.component.css';

const Navigation = () => {
   
    // <Fragment>
    //   <div className="navigation">
    //     <Link className="logo-container" to="/">
    //       <Home/>
    //     </Link>
    //     <Link className="logo-container" to="/about">
    //       <About/>
    //     </Link>
    //     <Link className="logo-container" to="/services">
    //       <p><Service/></p>
    //     </Link>
    //     <Link className="logo-container" to="/patient_portal">
    //       <Patientportal/>
    //     </Link>
    //     <Link className="logo-container" to="/about">
    //       <Testimonials/>
    //     </Link>
    //     <Link className="logo-container" to="/faq">
    //       <Faq/>
    //     </Link>
    //   </div>
    //   <Outlet />
    // </Fragment>

const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
const Close = () => setClick(false);

return (
  <div className="main-nav">
   <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
    <nav className="navbar" onClick={e => e.stopPropagation()}>
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          Dentist
          <i className="fa fa-code"></i>
        </NavLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Abouts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/services"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/faq"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              FAQ
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/testimonials"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Testimonials
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/patient_portal"
              activeClassName="active"
              className="nav-links"
             onClick={click ? handleClick : null}
            >
              Patient Portal
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
      </div>
    </nav>
    <Outlet />
  </ div>
)


};

export default Navigation;
