import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Home from "../HOME/home.component";
import About from "../about/about.component";
import Service from "../services/service.component";
import Patientportal from "../patient_portal/patient_portal.component";
import Testimonials from "../testimonials/testimonials";
import Faq from "../faq/faq.component";

const Navigation = () => (
   
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Home/>
        </Link>
        <Link className="logo-container" to="/about">
          <About/>
        </Link>
        <Link className="logo-container" to="/services">
          <p><Service/></p>
        </Link>
        <Link className="logo-container" to="/patient_portal">
          <Patientportal/>
        </Link>
        <Link className="logo-container" to="/about">
          <Testimonials/>
        </Link>
        <Link className="logo-container" to="/faq">
          <Faq/>
        </Link>
      </div>
      <Outlet />
    </Fragment>
);

export default Navigation;
