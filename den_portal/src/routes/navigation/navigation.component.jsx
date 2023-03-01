import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import About from "../about/about.component";

const Navigation = () =>{
    <Fragment>
        <div className="navigation">
        <Link className="logo-container" to ="/">
            <h1>homo</h1>
            <h2>lfdnnlfldsflnfln</h2>
        </Link>
        <Link className="logo-container" to="/about">
          <About/>
        </Link>
        </div>
        <Outlet/>
    </Fragment>
}

export default Navigation;