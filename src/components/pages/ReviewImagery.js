import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import axios from "axios";

const memoryCard = memoryCards[2];
export default class ReviewImagery extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get("https://run.mocky.io/v3/d593856f-b74d-44f9-a49d-0ff0cfb0e105")
         .then(function (response) {
            // handle success
            console.log(response);
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
   }

   render() {
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
}
