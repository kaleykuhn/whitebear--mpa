import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";

const memoryCard = memoryCards[2];
export default function ReviewImagery() {
   return (
      <AppTemplate>
         <div className="mt-5"></div>
         <div className="mb-5">
            <div className="card bg-primary">
               <div className="card-body">{memoryCard.imagery}</div>
            </div>
         </div>
         <Link to="/review-answer" className="btn btn-link">
            Previous card
         </Link>
         <div className="float-right">
            <Link
               to="/review-answer"
               type="button"
               className="btn btn-outline-primary mr-0"
            >
               Show Answer
            </Link>
         </div>
      </AppTemplate>
   );
}
