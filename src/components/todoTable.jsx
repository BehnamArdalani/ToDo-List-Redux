import React from "react";
import { Modal, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/todos";

const ToDoTable = () => {
  const { todos: data, modal } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(actions.todoRemoved(item.id));
  };

  const handleEdit = (item) => {
    dispatch(actions.modalOpened(item));
  };

  const handleCloseModal = () => {
    dispatch(actions.modalClosed());
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(actions.todoEdited(modal));
    dispatch(actions.modalClosed());
  }

  const handleChange = ({ currentTarget: input }) => {
    const item = modal;
    item[input.name] = input.value;
    dispatch(actions.todoEdited(item));
  };

  return (
    <React.Fragment>
      <table className={`table ${!data.length && "d-none"}`}>
        <thead>
          <tr className="row">
            <th className="col-2" scope="col">
              Title
            </th>
            <th className="col-6" scope="col">
              Description
            </th>
            <th className="col-2" scope="col">
              Status
            </th>
            <th className="col-1" scope="col"></th>
            <th className="col-1" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="row">
              <td className="col-2">{item.title}</td>
              <td className="col-6">{item.description}</td>
              <td className="col-2">{item.level}</td>
              <td className="col-1">
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => handleEdit(item)}
                >
                  <i className="fa fa-pencil"></i> Edit
                </button>
              </td>
              <td className="col-1">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(item)}
                >
                  <i className="fa fa-minus"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={modal.isOpen} onHide={handleCloseModal}>
        <ModalHeader closeButton> Edit ToDo Item </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="id"
              name="id"
              value={modal.id}
              onChange={handleChange}
              className="form-control d-none"
            />
            <div className="form-group">
              <label htmlFor="title" className="col-form-label">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={modal.title}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description" className="col-form-label">
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={modal.description}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Status" className="col-form-label">
                Status:
              </label>
              <input
                type="text"
                id="level"
                name="level"
                value={modal.level}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default ToDoTable;
