import React from 'react'

const InputField = () => {
  return (
    <div class="container text-center">
        <div class="row">
          <div class="col-6"><input type="text" placeholder="Enter Todo Here" /></div>
          <div class="col"><input type="date" name="" id="" /></div>
          <div class="col">
          <button type="button" class="btn btn-success">
           Add
          </button>
          </div>
        </div>
      </div>
  )
}

export default InputField