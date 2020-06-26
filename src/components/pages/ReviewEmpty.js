import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewEmpty() {
   return (
      <AppTemplate>
         <div className="mb-5"></div>
         <h4 className="my-4 text-center text-muted">Out of Cards</h4>
         <Link to="/review-answer" type="button" className="btn btn-link">
            Previous card
         </Link>
         <div className="float-right">
            <Link
               to="/review-imagery"
               type="button"
               className="btn btn-outline-primary mr-0"
            >
               Get More Cards
            </Link>
         </div>
      </AppTemplate>
   );
}
