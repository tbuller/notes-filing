import { React, useState } from 'react'
import { SketchPicker } from 'react-color'



const NewFolderForm = ({ navigate }) => {

  const [fileName, setFileName] = useState("")
  const [color, setColor] = useState("#FFFFFF")

  const handleFileName = (event) => {
    setFileName(event.target.value)
    console.log(fileName)
  }
  const handleColor = (event) => {
    setColor(event.target.value)
  }

  const handleSubmit = () => {
    
    navigate("/myhome")
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
      <input type="color" id="folder-color" value={color} list="true" onChange={handleColor} />
      </div> 
      <input type="submit" onClick={handleSubmit} />      
      </form>
    </div>
    </>
    
  )
}

export default NewFolderForm;