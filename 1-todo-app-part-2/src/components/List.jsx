import React from 'react'

const List = ({ items }) => {
  return (
    <div className="container">
      {items.map((item, index) => (
        <div className="row text-center" key={index}>
          <div className="col-6">{item.name}</div>
          <div className="col">{item.dueDate}</div>
          <div className="col">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;