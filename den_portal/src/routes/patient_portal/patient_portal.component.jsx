import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Signup from "../signup/signup.component";
const Patientportal = () => {
  return (
    <div>
      <h1>patientportal</h1>
      <Signup />
      <NavLink exact to="/register" >
          REGISTER
        </NavLink>
    </div>
  );
};

export default Patientportal;
