import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import { connect } from "react-redux";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

import actions from "../../store/actions";

class ReviewAnswer extends React.Component {
   gotoNextCard() {
      //TODO: if index of current card = length of the array of all cards if we go to end of array
      //Then show out of cards component
      this.props.dispatch({ type: actions.UPDATE_INDEX_OF_CURRENT_CARD });
      this.props.history.push("/review-imagery");
   }
   render() {
      const memoryCard = this.props.queuedCards[this.props.indexOfCurrentCard];
      return (
         <AppTemplate>
            <div className="mb-5"></div>
            <div className="mb-5">
               <div className="card bg-primary">
                  <div className="card-body">
                     {memoryCard && memoryCard.imagery}
                  </div>
               </div>

               <div className="card bg-secondary">
                  <div className="card-body">
                     {memoryCard && memoryCard.answer}
                  </div>
               </div>
            </div>
            <Link to="/edit" type="button" className="btn btn-link">
               Edit
            </Link>
            <div className="float-right">
               <button
                  type="button"
                  className="btn btn-outline-primary mr-4"
                  onClick={() => {
                     this.gotoNextCard();
                  }}
               >
                  Needs Work
               </button>

               <button
                  type="button"
                  className="btn btn-primary"
                  nClick={() => {
                     this.gotoNextCard();
                  }}
               >
                  <img
                     src={thumbsUpIcon}
                     width="20px"
                     style={{ marginBottom: "5px", marginRight: "4px" }}
                     alt=""
                  />
                  Got it
               </button>
            </div>
         </AppTemplate>
      );
   }
}
function mapStateToProps(state) {
   return {
      queuedCards: state.queuedCards,
      indexOfCurrentCard: state.indexOfCurrentCard,
   };
}
export default connect(mapStateToProps)(ReviewAnswer);
