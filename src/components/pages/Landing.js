import React from "react";
import logolanding from "../../img/logo-landing.png";
import Login from "../ui/LogIn";
import SignUp from "../ui/SignUp";
export default function Landing() {
   return (
      <div className="landing-background">
         <div className="container landing">
            <div className="row py-6">
               <div className="col-lg-1 offset-lg-0">
                  <img
                     className="bear logo"
                     src={logolanding}
                     alt="white bear outline constelation shape walking left"
                  />
               </div>
               <div className="col-xl-7 offset-xl-1">
                  <h1 className="bear-text">White Bear</h1>
               </div>
            </div>

            <div className="row">
               <SignUp />
               <Login />
            </div>
         </div>
      </div>
   );
}
