import React, { useRef, useState } from 'react';

const InputField = ({ setItems, items }) => {
  const task = useRef();
  const date = useRef();

  const addItems = (e) => {
    e.preventDefault(); // prevent page reload

    const newItem = {
      name: task.current.value,
      dueDate: date.current.value
    };
     task.current.value = "";
     date.current.value = "";
    setItems([...items, newItem]);
    
  };

  return (
    <form onSubmit={addItems} className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            ref={task}
            placeholder="Enter Todo Here"
            required
          />
        </div>
        <div className="col">
          <input
            type="date"
            ref={date}
            required
          />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputField;
