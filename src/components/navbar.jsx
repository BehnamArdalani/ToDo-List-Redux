import * as actions from "../store/todos";

const NavBar = ({ store }) => {
  // console.log(store.getState());
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
        <form>
          <div className="row">
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                placeholder="New title"
              />
            </div>
            <div className="col-8">
              <input
                type="text"
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
