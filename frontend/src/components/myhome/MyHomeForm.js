import React from 'react'

const MyHomeForm = ({ navigate }) => {

  const handleClick = () => {
    navigate("/newfolder")
  }

  return (
  <>
  <div>welcome to your home page</div><div>
    <button onClick={handleClick}>create folder</button>
  </div>
  </>
  )
}

export default MyHomeForm