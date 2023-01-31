import { React, useState } from 'react'

const NewFolderForm = ({ navigate }) => {

  const [fileName, setFileName] = useState("")
  const [color, setColor] = useState("")
  const [font, setFont] = useState("")

  const handleFileName = (event) => {
    setFileName(event.target.value)
    console.log(fileName)
  }
  const handleColor = (event) => {
    setColor(event.target.value)
  }

  const handleSubmit = () => {
    console.log(fileName)
    // navigate("/myhome")
  }

  console.log(fileName)
  console.log(color)

  return (
    
    <>
    <h1>create a new folder</h1>
    <div>
      <form>
      <div>
      <label>New file name:</label>  
      <input type="text" onChange={handleFileName} />
      </div> 
      <div>
      <label>New file color:</label>  
      <input type="color" value="#330000" className="file-color" onChange={handleColor} list />
      </div> 
      <input type="submit" onSubmit={handleSubmit} />      
      </form>
    </div>
    </>
    
  )
}

export default NewFolderForm;