import { createContext, useState } from "react";

const addnewAppointment = (Appointments,addAppointment) =>{
    return [...Appointments, {...addAppointment}]
}

export const AccountContext = createContext({
    name:"",
    setName:()=>{},
    id:0,
    setId:()=>{},
    Appointments:[],
    addAppointment: () =>{},
    isLogin:false,
    setIsLogin:()=>{},
    email:"",
    setEmail:()=>{},
    gender:"",
    setGender:()=>{},
    address:"",
    setAddress:()=>{},
    number:"",
    setNumber:()=>{}
})

export const AccountProvider =({children}) =>{
    const [name,setName] = useState("---");
    const [Appointments,setAppointments] = useState("---");
    const [id,setId] = useState("---");
    const [isLogin,setIsLogin] = useState();
    const [email,setEmail] = useState();
    const [gender,setGender] = useState();
    const [address,setAddress] = useState();
    const [number,setNumber] = useState();

    const addAppointment= (AppointmentToAdd) =>{
        setAppointments(addnewAppointment(Appointments,addAppointment))
    }
 const value = {name,setName,id,setId,addAppointment,Appointments,isLogin,setIsLogin,setAppointments,email,setEmail,gender,setGender,address,setAddress,number,setNumber};
    return(
        <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
    )
}