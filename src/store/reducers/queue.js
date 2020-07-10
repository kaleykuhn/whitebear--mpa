import actions from "../actions";

export default function queue(queue = {}, action) {
   //type & payload
   //action.payload, action.type
   let newQueue = { ...queue };
   switch (action.type) {
      case actions.STORE_QUEUED_CARDS:
         console.log("FIRED STORE_QUEUED_CARDS");
         newQueue.cards = action.payload;
         return newQueue; //new state
      case actions.UPDATE_INDEX_OF_CURRENT_CARD:
         newQueue.index += 1;
         return queue; //new state
      default:
         return queue; //new state
   }
}
