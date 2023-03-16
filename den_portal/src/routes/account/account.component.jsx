import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AccountContext } from "../../contexts/context.accoounts";
const Account = () => {
  const navigate = useNavigate();
  const {name,setName,id,setId,addAppointment,Appointments,isLogin,setIsLogin,setAppointments} = useContext(AccountContext);
  const logOut = () =>{
    setName("")
    setId("")
    setAppointments("")
    setIsLogin(false)
    navigate("/login")
  }
  return (
    <div>
      <h1>ACCOUNT</h1>
      <div><h1>{name}</h1></div>
      <div>hello</div>
      <Button onClick={logOut}></Button>
    </div>
  );
};

export default Account;
