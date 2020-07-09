import actions from "../actions";

export default function queuedCards(state = [], action) {
   //action.payload, action.type
   switch (action.type) {
      case actions.STORE_QUEUED_CARDS:
         return action.payload; // [{id: asda}, {}]
      default:
         return state;
   }
}
