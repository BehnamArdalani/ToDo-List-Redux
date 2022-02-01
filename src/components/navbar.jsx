import * as actions from "../store/todos";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      actions.todoAdded({
        title: e.target["title"].value,
        description: e.target["description"].value,
      })
    );

    e.target["title"].value = "";
    e.target["description"].value = "";
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        ToDo List
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-3">
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                placeholder="New title"
              />
            </div>
            <div className="col-8">
              <input
                type="text"
                name="description"
                id="description"
                className="form-control"
                placeholder="New Description"
              />
            </div>
            <div className="col-1">
              <button className="btn btn-primary">Add</button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
