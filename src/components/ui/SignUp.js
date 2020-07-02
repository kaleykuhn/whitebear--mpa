import React from "react";
import classnames from "classnames";

import { Link } from "react-router-dom";
export default class SignUp extends React.Component {
   constructor(props) {
      super(props);
      console.log("In a new class component");
      this.state = {
         isDisplayingInputs: false,
         emailError: "",
         passwordError: "",
         hasEmailError: false,
         hasPasswordError: false,
      };
   }
   showInputs() {
      this.setState({
         isDisplayingInputs: true,
      });
   }
   setEmailState(emailInput) {
      const lowerCasedEmailInput = emailInput.toLowerCase();
      console.log(lowerCasedEmailInput);
      // eslint-disable-next-line
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailInput === "")
         this.setState({
            emailError: "Please enter your email address.",
            hasEmailError: true,
         });
      else if (!emailRegex.test(lowerCasedEmailInput)) {
         console.log("NOT a VALID EMAIl");
         this.setState({
            emailError: "Please enter a valid email address.",
            hasEmailError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }
   setPasswordState(passwordInput) {
      console.log(passwordInput);
      //can't be blank
      // must be at least 9 characters
      //cannot contain the local-part of the email
      //must have at least 3 unique characters
      if (passwordInput === "")
         this.setState({
            passwordError: "Please create a password. ",
            hasPasswordError: true,
         });
   }

   validateAndCreateUser() {
      console.log("VALIDATE ME");
      //Email cannot be blank
      //must have valid email regex
      const emailInput = document.getElementById("signup-email-input").value;
      console.log(emailInput);
      const passwordInput = document.getElementById("login-password-input")
         .value;
      this.setEmailState(emailInput);
      this.setPasswordState(passwordInput);
   }

   render() {
      return (
         <div className="offset-1 col-10 offset-sm-1 col-sm-9 offset-md-1 col-md-4 offset-lg-2 col-lg-4 offset-xl-2 col-xl-4 mb-6 mt-8">
            <div className="card">
               <div className="card-body text-dark bg-white rounded">
                  <h2 className="card-title">Nice to Meet You</h2>
                  <p className="card-title">
                     Sign up for White Bear.Free forever.
                  </p>

                  <div className="" id="form1">
                     {this.state.isDisplayingInputs && (
                        <>
                           <p className="text-success mb-4">
                              let's get you signed up
                           </p>
                           <label
                              htmlFor="signup-email-input"
                              className="text-muted"
                           >
                              Email address
                           </label>
                           {this.state.emailError !== ""}

                           <input
                              type="email"
                              className={classnames({
                                 "form-control": true,
                                 "mb-2": true,
                                 "is-invalid": this.state.hasEmailError,
                              })}
                              id="signup-email-input"
                              aria-describedby="emailHelp"
                              placeholder=""
                           />
                           {this.state.hasEmailError && (
                              <p className="text-danger mb-4">
                                 {this.state.emailError}
                              </p>
                           )}
                           <div className="mb-4"></div>
                           <label
                              htmlFor="login-password-input"
                              className="text-muted"
                           >
                              Password
                           </label>
                           <input
                              type="password"
                              className={classnames({
                                 "form-control": true,
                                 "is-invalid": this.state.hasPasswordError,
                              })}
                              id="login-password-input"
                              placeholder=""
                           />
                           {this.state.hasPasswordError && (
                              <p className="text-danger">
                                 {this.state.passwordError}
                              </p>
                           )}
                           <div className="mb-2"></div>

                           <button
                              className="btn btn-success btn-block mt-6"
                              id="letsgo-button-landing"
                              onClick={() => {
                                 this.validateAndCreateUser();
                              }}
                           >
                              Let's go
                           </button>
                        </>
                     )}
                     {!this.state.isDisplayingInputs && (
                        <button
                           className="btn btn-block btn-success"
                           onClick={() => {
                              this.showInputs();
                           }}
                        >
                           Sign Up
                        </button>
                     )}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
