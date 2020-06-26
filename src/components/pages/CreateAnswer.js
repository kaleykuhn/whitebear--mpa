import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function CreateAnswer() {
   return (
      <AppTemplate>
         <h4 className="my-4 text-center text-muted">Add an answer</h4>
         <div className="mb-2">
            <div className="card bg-primary">
               <div className="card-body">
                  <textarea
                     autoFocus={true}
                     rows="11"
                     className="d-sm-none"
                  ></textarea>
                  <textarea
                     autoFocus={true}
                     rows="6"
                     className="d-none d-sm-block"
                     id="answerArea"
                  ></textarea>
               </div>
            </div>
         </div>

         <p className="float-right mb-5 mt-2" id="characterCounter">
            0/240
         </p>
         <div className="clearfix"></div>
         <Link
            to="/create-imagery"
            className="btn btn-outline-primary btn-lg float-right"
            id="nextButton"
         >
            Next
         </Link>
      </AppTemplate>
   );
}
