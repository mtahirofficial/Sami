import { stat } from "fs";

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      // let users = [ action.payload, ...state ]
      console.log([action.payload, ...state])
      return [action.payload, ...state]
    default:
    state.push(JSON.parse(localStorage.getItem("users")))
      return state

  }
}

export default usersReducer
