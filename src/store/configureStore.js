import { combineReducers, createStore } from "redux";
import { todos, modal } from "./todos";

export default function configureStore() {
  const store = createStore(
    combineReducers({ todos, modal }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
