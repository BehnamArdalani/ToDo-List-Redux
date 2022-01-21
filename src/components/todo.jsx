import React from "react";
import ToDoTable from "./todoTable";
import { useSelector, useDispatch } from "react-redux";

const ToDO = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <ToDoTable
      data={data}
      handleEdit={[]}
      handleDelete={(i) => data.filter((j) => j.id !== i.id)}
    />
  );
};

export default ToDO;
