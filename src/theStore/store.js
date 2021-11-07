import { createStore } from "redux";
import rootReducer from "../theStore/rootReducer";

let appState = {
    bgColor: "black",
    activeColor: "blue"
}

function configureStore(state = appState) {
  return createStore(rootReducer,state);
}
export default configureStore;