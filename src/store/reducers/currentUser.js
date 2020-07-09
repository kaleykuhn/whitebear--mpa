import { bindActionCreators } from "redux";

import actions from "../actions";

export default function currentUser(state = {}, action) {
   // action.GET_User = "GET_USER"
   switch (action.type) {
      case actions.STORE_CURRENT_USER:
         return {};
      default:
         return state;
   }
}
