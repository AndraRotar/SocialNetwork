import React from "react";
import Navbar from "../../layout/Navbar/Navbar";
import "./style.css";
import axios from "axios";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmationPassword: "",
    };
  }

  registerNewUser = async () => {
    const { name, email, password } = this.state;
    const user = { name, email, password };

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(user);
      const response = await axios.post(
        "http://localhost:5500/api/users",
        body,
        config
      );
      console.log(response);
    } catch (error) {
      console.error(error.response.data.errors);
    }
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="form-container">
          <h1>Sign up</h1>
          <p className="title">Create your account</p>

          <form className="form">
            <div className="form-item">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) =>
                  this.setState({ ...this.state, name: e.target.value })
                }
              />
            </div>

            <div className="form-item">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) =>
                  this.setState({ ...this.state, email: e.target.value })
                }
              />
            </div>

            <div className="form-item">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) =>
                  this.setState({ ...this.state, password: e.target.value })
                }
              />
            </div>

            <div className="form-item">
              <label htmlFor="confirmatin-password">
                Confirmation Password
              </label>
              <input
                type="password"
                name="confirmation-password"
                id="confirmation-password"
                onChange={(e) =>
                  this.setState({
                    ...this.state,
                    confirmationPassword: e.target.value,
                  })
                }
              />
            </div>
            <input
              type="submit"
              value="SUBMIT"
              className="submit-btn"
              onClick={(e) => {
                e.preventDefault();
                this.registerNewUser();
              }}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
