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
    setIsLogin:()=>{}
})

export const AccountProvider =({children}) =>{
    const [name,setName] = useState("---");
    const [Appointments,setAppointments] = useState("---");
    const [id,setId] = useState("---");
    const [isLogin,setIsLogin] = useState();

    const addAppointment= (AppointmentToAdd) =>{
        setAppointments(addnewAppointment(Appointments,addAppointment))
    }
 const value = {name,setName,id,setId,addAppointment,Appointments,isLogin,setIsLogin,setAppointments};
    return(
        <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
    )
}