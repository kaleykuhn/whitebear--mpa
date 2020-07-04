import React from "react";
import AppTemplate from "../ui/AppTemplate";
import Save from "../../icons/save.svg";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import toDisplayDate from "date-fns/format";
import classnames from "classnames";
import { checkIsOver, MAX_CARD_CHARS } from "../../utils/helpers";
const memoryCard = memoryCards[2];

export default class Edit extends React.Component {
   constructor(props) {
      super(props);
      console.log("In the Edit component");
      this.state = {
         answerText: memoryCard.answer,
         imageryText: memoryCard.imagery,
      };
   }

   checkHasInvalidCharCount() {
      if (
         this.state.answerText.length > MAX_CARD_CHARS ||
         this.state.answerText.length === 0 ||
         this.state.imageryText.length > MAX_CARD_CHARS ||
         this.state.imageryText.length === 0
      ) {
         return true;
      } else return false;
   }

   setImageryText(e) {
      this.setState({ imageryText: e.target.value });
      console.log(e.target, e.target.value);
   }
   setAnswerText(e) {
      this.setState({ answerText: e.target.value });
      console.log(e.target, e.target.value);
   }

   render() {
      return (
         <AppTemplate>
            <h4 className="my-4 text-center text-muted">Edit Cards</h4>
            <div className="mb-2">
               <div className="card bg-primary">
                  <div className="card-body">
                     <textarea
                        rows="4"
                        defaultValue={memoryCard.imagery}
                        onChange={(e) => this.setImageryText(e)}
                     ></textarea>
                  </div>
               </div>

               <div className="card bg-secondary">
                  <div className="card-body">
                     <textarea
                        rows="4"
                        defaultValue={memoryCard.answer}
                        onChange={(e) => this.setAnswerText(e)}
                     ></textarea>
                  </div>
               </div>
            </div>
            <p className="float-right mb-5 mt-2 text-muted">
               <span
                  className={classnames({
                     "text-danger": checkIsOver(
                        this.state.imageryText,
                        MAX_CARD_CHARS
                     ),
                  })}
               >
                  Top: {this.state.imageryText.length}/{MAX_CARD_CHARS}
               </span>
               &nbsp;&nbsp;&nbsp;&nbsp;
               <span
                  className={classnames({
                     "text-danger": checkIsOver(
                        this.state.answerText,
                        MAX_CARD_CHARS
                     ),
                  })}
               >
                  Bottom: {this.state.answerText.length}/{MAX_CARD_CHARS}
               </span>
            </p>
            <div className="clearfix"></div>
            <Link
               to="all-cards"
               type="button"
               className="btn btn-link"
               id="create-error"
            >
               Discard changes
            </Link>
            <Link
               to="all-cards"
               className={classnames("btn btn-primary float-right btn-lg  ", {
                  disabled: this.checkHasInvalidCharCount(),
               })}
               id="save-imagery"
            >
               <img
                  src={Save}
                  width="20px"
                  style={{ marginBottom: "3px" }}
                  className="mr-2"
                  alt=""
               />
               Save
            </Link>
            <h4 className="my-8 text-center text-muted">Card Properties</h4>
            <div className="row">
               <div className="col-4 d-flex">
                  <h6 className="text-muted">Created on:</h6>
               </div>
               <div className="col-4 ml-6 d-flex">
                  <h6>{toDisplayDate(memoryCard.createdAt, "MMM.d,y")}</h6>
               </div>
            </div>
            <div className="row">
               <div className="col-4 d-flex">
                  <h6 className="text-muted">Last attempt:</h6>
               </div>
               <div className="col-4 d-flex ml-6">
                  <h6 className="">
                     {toDisplayDate(memoryCard.lastAttemptAt, "MMM.d,y")}
                  </h6>
               </div>
            </div>
            <div className="row">
               <div className="col-4 d-flex">
                  <h6 className="text-muted">Next attempt:</h6>
               </div>
               <div className="col-4 ml-6 d-flex">
                  <h6 className="">
                     {toDisplayDate(memoryCard.createdAt, "MMM.d,y")}
                  </h6>
               </div>
            </div>
            <div className="row">
               <div className="col-4 d-flex">
                  <h6 className="text-muted">Consecutives:</h6>
               </div>
               <div className="col-4 ml-6 d-flex">
                  <h6 className="">{memoryCard.totalSuccessfulAttempts}</h6>
               </div>
            </div>
            <div className="row">
               <div className="col-6 mt-2">
                  <div className="custom-control custom-checkbox">
                     <input
                        type="checkbox"
                        className="custom-control-input"
                        id="show-delete"
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="show-delete"
                     >
                        Show delete button
                     </label>
                  </div>
               </div>
            </div>
            <button
               type="button"
               className=" btn btn-lg btn-outline-danger my-4"
               id="delete-button"
            >
               Delete this card
            </button>
         </AppTemplate>
      );
   }
}
