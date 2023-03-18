import {useState, useEffect, useRef} from "react";
import React from "react";
import $ from "jquery"
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import 'bootstrap/dist/css/bootstrap.min.css';

import Alert from 'react-bootstrap/Alert';

const Appointments = () =>{
  const ref = useRef(null);
  const [Services,setServices] =useState([]);
  useEffect(() => {
    fetch('/api/fetch_all_appointments', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setServices(data.data);
        var msgs = data.data;
        for (let i = 0; i < msgs.length; i++) {
          var scroll = false;
          if (i === msgs.length - 1) {
            scroll = true;
          }
          add_messages(msgs[i], scroll);
        }
      });
  }, []);
      
       async function add_messages(msg ,scroll) {
          var content =
          '<div role="alert" class="fade alert alert-success show" style="transition-delay: 1s;">' +
          '<div class="alert-heading h4" >CUSTOMER ID : ' + msg.customer_id + 
          '</div>';
          
          content+= "<h4>Services</h4>" ;
            for (let i = 0; i < msg.services.length; i++) {
              content+=
                 "<p>" +
                    msg.services[i]['services'] + 
                  "</p>"
                    
            }
            content+='<div class="button"> Appointment complete </div>'
            content+="</div>"
          
          var messageDiv = ref.current;
          messageDiv.innerHTML += content;
          
        }

    return  (
      <div>
      <div className="row" style={{ paddingTop: '10px' }}>
        <div className="col">
          <hr />
        </div>
        <div className="col-auto">
          <p className="h3" align="center">
            Todays Appointments
          </p>
        </div>
        <div className="col">
          <hr />
        </div>
      </div>
      <div className="container">
      <MDBContainer className="py-5">
          <MDBRow>
          <div ref={ref} id="messages">
          </div>
      </MDBRow>
      </MDBContainer>
        
      </div>
    </div>
  );
}

export default Appointments;