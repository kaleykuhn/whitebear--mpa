import React from "react";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUUid } from "uuid";

export default class Login extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         emailError: "",
         hasEmailError: false,
         hasPasswordError: false,
      };
   }

   validateAndLogUser() {
      this.setState({
         isDisplayingInputs: true,
      });
   }

   //set email state
   async setEmailState(emailInput) {
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

   // set state of password
   async setPasswordState(passwordInput) {
      console.log(passwordInput);
      //can't be blank
      // must be at least 9 characters
      //cannot contain the local-part of the email
      //must have at least 3 unique characters
      const uniqChars = [...new Set(passwordInput)];
      console.log(uniqChars);
      if (passwordInput === "") {
         this.setState({
            passwordError: "Please enter your password.",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }
   //setting the state of App
   async validateAndCreateUser() {
      console.log("VALIDATE ME");
      //Email cannot be blank
      //must have valid email regex
      const emailInput = document.getElementById("login-email-input").value;
      console.log(emailInput);
      const passwordInput = document.getElementById("login-password-input")
         .value;
      await this.setEmailState(emailInput);
      await this.setPasswordState(passwordInput);
      if (
         this.state.hasEmailError === false &&
         this.state.hasPasswordError === false
      ) {
         //create user object
         const user = {
            id: getUUid(),
            email: emailInput,
            password: hash(passwordInput),
            createdAt: Date.now(),
         };
         console.log("Valid!!!!", user);
      }
   }

   render() {
      return (
         <div className="offset-1 col-10 offset-sm-1 col-sm-9 offset-md-1 col-md-4 offset-lg-2 col-lg-4 offset-xl-2 col-xl-4 mb-6 mt-8">
            <div className="card">
               <div className="card-body text-dark bg-white rounded">
                  <h2 className="card-title">Welcome back</h2>
                  <p className="card-title">
                     Log in with your email address and password.
                  </p>

                  <p className="text-success"></p>
                  <label htmlFor="login-email-input" className="text-muted">
                     Email address
                  </label>
                  <input
                     type="email"
                     className={classnames({
                        "form-control": true,
                        "is-invalid": this.state.hasEmailError,
                     })}
                     id="login-email-input"
                     placeholder=""
                  />
                  {this.state.hasPasswordError && (
                     <p className="text-danger">{this.state.emailError}</p>
                  )}

                  <label htmlFor="login-password-input" className="text-muted">
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
                     <p className="text-danger">{this.state.passwordError}</p>
                  )}

                  <button
                     className="btn btn-success float-right mt-6"
                     onClick={() => {
                        this.validateAndCreateUser();
                     }}
                  >
                     Log in
                  </button>
               </div>
            </div>
         </div>
      );
   }
}
