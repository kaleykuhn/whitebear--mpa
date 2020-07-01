import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";

import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
const memoryCard = memoryCards[3];

export default function ReviewAnswer() {
   return (
      <AppTemplate>
         <div className="mb-5"></div>
         <div className="mb-5">
            <div className="card bg-primary">
               <div className="card-body">{memoryCard.imagery}</div>
            </div>

            <div className="card bg-secondary">
               <div className="card-body">{memoryCard.answer}</div>
            </div>
         </div>
         <Link to="/edit" type="button" className="btn btn-link">
            Edit
         </Link>
         <div className="float-right">
            <Link
               to="/review-empty"
               type="button"
               className="btn btn-outline-primary mr-4"
            >
               Needs Work
            </Link>

            <Link
               to="/review-imagery"
               type="button"
               className="btn btn-primary"
            >
               <img
                  src={thumbsUpIcon}
                  width="20px"
                  style={{ marginBottom: "5px", marginRight: "4px" }}
                  alt=""
               />
               Got it
            </Link>
         </div>
      </AppTemplate>
   );
}
