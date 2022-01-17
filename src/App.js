import NavBar from "./components/navbar";
import * as actions from "./store/todos";
import "./App.css";

function App({ store }) {
  console.log(store.getState());
  //store.dispatch(actions.todoAdded({ title: "tst2", level: 1 }));

  return (
    <div className="App">
      <NavBar store={store} />
    </div>
  );
}

export default App;
