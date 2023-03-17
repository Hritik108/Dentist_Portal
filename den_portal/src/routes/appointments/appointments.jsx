import React from "react";

const Appointments = () =>{

    {(() => {
        fetch("/api/fetch_all_appointments", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data.data)
            for (let i=0 ; i < data.data.length;i++){
                console.log(data.data[i])
            }
        }
          )
       })() }
    return (
        <h1>
            Hello
        </h1>
    )
}

export default Appointments;