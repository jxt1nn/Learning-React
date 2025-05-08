import React from 'react'

const List = () => {

  let task = 'Buy Milk';
  let date ='10/05/2025';
  
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">{task}</div>
          <div class="col">{date}</div>
          <div class="col">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default List