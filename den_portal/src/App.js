import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/HOME/home.component";
import About from "./routes/about/about.component";
import Service from "./routes/services/service.component";
// import Patientportal from "./routes/patient_portal/patient_portal.component";
import Faq from "./routes/faq/faq.component";
import Testimonials from "./routes/testimonials/testimonials";
import SignupForm from "./routes/register/register.component";
import Signup from "./routes/signup/signup.component";
import Account from "./routes/account/account.component";
import { useContext } from "react";
import { AccountContext } from "./contexts/context.accoounts";

import "./App.css";

function App() {
  const {setIsLogin,isLogin} = useContext(AccountContext);
  return (
    // <div className="App">
    //   <h1>HELLO</h1>
    // </div>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Service />} />
        {/* <Route path="patient_portal" element={<Patientportal />} /> */}
        <Route path="faq" element={<Faq />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="register" element={<SignupForm />} />
        <Route path="login" element={<Signup />} />
        {isLogin && <Route path="account" element={<Account/>} />}
        { !isLogin && <Route path="account" element={<Signup/>} />}
        {/* <Route path="auth" element={<Authentication />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
