import React from "react";
import { Modal, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/todos";

const ToDoTable = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  let isOpen = false;

  const handleEdit = (item) => {
    console.log("Edit  " + item.title);
    isOpen = true;
  };

  const handleDelete = (item) => {
    console.log("Delete  " + item.title);
    dispatch(actions.todoRemoved(item.id));
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

      <Modal show={isOpen} onHide={handleCloseModal}>
        <ModalHeader closeButton> Edit ToDo Item </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="id"
              name="id"
              value={data.id}
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
                value={data.title}
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
                value={data.description}
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
                id="status"
                name="status"
                value={data.status}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <button className="btn btn-primary">Save</button>
          </form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default ToDoTable;

function handleCloseModal() {}

function handleSubmit() {}

function handleChange() {}
