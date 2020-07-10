import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

class ReviewImagery extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get(
            "https://raw.githubusercontent.com/kaleykuhn/white-bear-mpa/master/src/mock-data/memory-cards.json"
         )
         .then(function (res) {
            // handle success
            console.log(res);
            props.dispatch({
               type: actions.STORE_QUEUED_CARDS,
               payload: res.data,
            });
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
      /* 
         queuedCards: [],
         indexOfCurrentCard: 0,
         currentUser : {}
        */
   }

   render() {
      const memoryCard = this.props.queue.cards[this.props.queue.index];
      console.log({ memoryCard });
      return (
         <AppTemplate>
            <div className="mt-5"></div>
            <div className="mb-5">
               <div className="card bg-primary">
                  <div className="card-body">
                     {memoryCard && memoryCard.imagery}
                  </div>
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
function mapStateToProps(state) {
   return {
      queue: state.queue,
   };
}
export default connect(mapStateToProps)(ReviewImagery);
