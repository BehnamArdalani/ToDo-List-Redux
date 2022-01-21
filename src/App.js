import NavBar from "./components/navbar";
import configureStore from "./store/configureStore";

import { Provider } from "react-redux";
import * as actions from "./store/todos";
import "./App.css";
import ToDO from "./components/todo";

function App() {
  //console.log(store.getState());
  //store.dispatch(actions.todoAdded({ title: "tst2", level: 1 }));

  const store = configureStore();

  return (
    <Provider store={store}>
      <div className="container">
        <NavBar />
        <ToDO />
      </div>
    </Provider>
  );
}

export default App;
