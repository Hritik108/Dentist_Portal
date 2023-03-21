import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";
import $ from "jquery";
// import { response } from "express";

class Prescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: "",
    };
  }

  handleNewMessageChange = (event) => {
    this.setState({ newMessage: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { messages, newMessage } = this.state;
    if (newMessage.trim() === "") {
      return;
    } else {
      let question = $("#msg").val();
      const data = {
        question: question,
      };
      this.setState({
        messages: [...messages, newMessage.trim()],
        newMessage: "",
      });
      fetch("http://localhost:5050//api/prescriptions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            messages: [...messages, newMessage.trim(), data.data],
            newMessage: "",
          });
        });
    }
  };

  render() {
    const { messages, newMessage } = this.state;
    return (
      <div>
        <div className="row" style={{ paddingTop: "10px" }}>
          <div className="col">
            <hr />
          </div>
          <div className="col-auto">
            <p className="h3" align="center">
              Start Chatting
            </p>
          </div>
          <div className="col">
            <hr />
          </div>
        </div>
        <div className="container">
          <div
            id="messages"
            className="overflow-auto msgs"
            style={{ overflowY: "scroll", height: "500px" }}
          >
            {messages.map((message, index) => (
              <Alert variant="success" style={{ transitionDelay: "1s" }}>
                <Alert.Heading key={index}> {message}</Alert.Heading>
              </Alert>
            ))}
          </div>
          <form
            id="msgForm"
            onSubmit={this.handleFormSubmit}
            style={{ bottom: "0", margin: "0% 0% 0% 0%" }}
          >
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Message"
                aria-label="Message"
                id="msg"
                value={newMessage}
                onChange={this.handleNewMessageChange}
              />
              <div className="input-group-append">
                <button className="btn btn-success" type="submit" id="sendBtn">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Prescription;
