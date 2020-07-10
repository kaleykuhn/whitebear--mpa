import actions from "../actions";

export default function currentUser(currentUser = {}, action) {
   // let newCurrentUser = { ...currentUser };
   // action.GET_User = "GET_USER"
   switch (action.type) {
      case actions.STORE_CURRENT_USER:
         return {};
      default:
         return currentUser;
   }
}
