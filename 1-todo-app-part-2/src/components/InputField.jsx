import React, { useState } from 'react'

const InputField = ({setItems , items}) => {
    let [task , setTask] = useState("");
    let [date , setDate] = useState("");
    const handleTask = (e) => {
      setTask(e.target.value);
    }
    const handleDate = (e) => {
      setDate(e.target.value);
    }
    const addItems = () => {
      const newItem = {
        name: task,
        dueDate: date
      };

      setItems([...items, newItem]);

      setTask("");
      setDate("");
    }
  return (
    <form onSubmit={addItems} className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            value={task}
            onChange={handleTask}
            placeholder="Enter Todo Here"
            required
          />
        </div>
        <div className="col">
          <input
            type="date"
            value={date}
            onChange={handleDate}
            required
          />
        </div>
        <div className="col">
          <button onClick={addItems} type="submit" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputField