import React from 'react'

const InputField = () => {
  return (
    <div classNameName="container text-center">
        <div className="row">
          <div className="col-6"><input type="text" placeholder="Enter Todo Here" /></div>
          <div className="col"><input type="date" name="" id="" /></div>
          <div className="col">
          <button type="button" className="btn btn-success">
           Add
          </button>
          </div>
        </div>
      </div>
  )
}

export default InputField