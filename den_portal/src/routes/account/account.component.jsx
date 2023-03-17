import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AccountContext } from "../../contexts/context.accoounts";
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
const Account = () => {
  const navigate = useNavigate();
  const {
    name,
    setName,
    id,
    setCustomerId,
    addAppointment,
    Appointments,
    isLogin,
    setIsLogin,
    setAppointments,
    address,
    setAddress,
    email,
    setEmail,
    gender,
    setGender,
    number,
    setNumber,
  } = useContext(AccountContext);
  const logOut = () => {
    setName("");
    setCustomerId("");
    setAppointments("");
    setIsLogin(false);
    navigate("/login");
  };

  const [Services,setServices] =useState([]);

  const dental_Cleaning = () =>{
   setServices(Serv =>[...Serv,{'services':'Dental Cleanings','serviceCharges':10}])
   console.log(Services);
  }
  const fillings = () =>{
    setServices(Serv => [...Serv,{'services':'Fillings','serviceCharges':10}])
   }
   const root_Canals = () =>{
    setServices(Serv => [...Serv,{'services':'Root Canals','serviceCharges':10}])
   }
   const dental_implants = () =>{
    setServices(Serv => [...Serv,{'services':'Dental Implants','serviceCharges':10}])
   }
   const orthodontics = () =>{
    setServices(Serv => [...Serv,{'services':'Orthodontics','serviceCharges':10}])
   }
   const teeth_Withening = () =>{
    setServices(Serv => [...Serv,{'services':'Teeth Whithening','serviceCharges':10}])
   }

   const Appointment = () =>{
    const data = {
      "customer_id" : id,
      "services" : Services 
    }
    fetch("/api/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
   }

  return (
    <div>
      <Button onClick={logOut}></Button>
      <section style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <p className="text-muted mb-1">{name}</p>
                  <p className="text-muted mb-4">{address}</p>
                  <div className="d-flex justify-content-center mb-2">
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fas icon="globe fa-lg text-warning" />
                      <MDBCardText>https://mdbootstrap.com</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="github fa-lg"
                        style={{ color: "#333333" }}
                      />
                      <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="twitter fa-lg"
                        style={{ color: "#55acee" }}
                      />
                      <MDBCardText>@mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="instagram fa-lg"
                        style={{ color: "#ac2bac" }}
                      />
                      <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="facebook fa-lg"
                        style={{ color: "#3b5998" }}
                      />
                      <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Customer Id</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{id}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{name}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{email}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{number}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {address}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

              <MDBRow>
                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4">
                        <span className="text-primary font-italic me-1">
                          Services Available
                        </span>{" "}
                        Rates
                        <hr />
                        <MDBRow on onClick={dental_Cleaning}>
                          <MDBCol sm="9">
                            <MDBCardText>Dental Cleanings</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="3">
                            <MDBCardText className="text-muted">
                              10$
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow onClick={fillings}>
                          <MDBCol sm="9">
                            <MDBCardText>Filings</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="3">
                            <MDBCardText className="text-muted">
                              10$
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow onClick={root_Canals}>
                          <MDBCol sm="9">
                            <MDBCardText>Root Canals</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="3">
                            <MDBCardText className="text-muted">
                              10$
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow onClick={dental_implants}>
                          <MDBCol sm="9">
                            <MDBCardText>Dental Implants</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="3">
                            <MDBCardText className="text-muted">
                              10$
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow onClick={orthodontics}>
                          <MDBCol sm="9">
                            <MDBCardText>Orthodontics</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="3">
                            <MDBCardText className="text-muted">
                              10$
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow onClick={teeth_Withening}>
                          <MDBCol sm="9">
                            <MDBCardText>Teeth Whitening</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="3">
                            <MDBCardText className="text-muted">
                              10$
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4">
                        <span className="text-primary font-italic me-1">
                          assigment
                        </span>{" "}
                        Project Status
                      </MDBCardText>
                      <hr />
                    {
                       Services.map(service => (<><MDBRow>
                          <MDBCol sm="9">
                            <MDBCardText>{service.services}</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="3">
                            <MDBCardText className="text-muted">
                            {service.serviceCharges}$
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr /></>))
                    }
                    <MDBRow>
                     <MDBCol sm="9">
                            <MDBCardText>Total Cost</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="3">
                            <MDBCardText className="text-muted">
                            {Services.length*10}$
                            </MDBCardText>
                          </MDBCol>
                    </MDBRow>
                        <hr />
                      <MDBRow>
                        <MDBBtn onClick={ Appointment }>Make An Appointment</MDBBtn>
                      </MDBRow>
                        
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Account;
