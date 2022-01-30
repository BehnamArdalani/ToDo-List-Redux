
import NavBar from "./components/navbar";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import "./App.css";
import ToDO from "./components/todo";

function App() {

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
