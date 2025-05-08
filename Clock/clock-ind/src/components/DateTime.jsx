import React from 'react'

const DateTime = () => {
  let time = new Date();
  return (
    <div>
    This is current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</div>
  )
}

export default DateTime