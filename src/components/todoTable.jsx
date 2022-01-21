import React from "react";

const ToDoTable = ({ data, handleEdit, handleDelete }) => {
  console.log(data);

  return (
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
  );
};

export default ToDoTable;
