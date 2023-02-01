import File from '../folder/File'
import { React, useState, useEffect } from 'react'
import './MyHome.css'
import { json } from 'react-router'

const MyHome = ({ navigate }) => {

  const[files, setFiles] = useState([])
  const[token, setToken] = useState(window.localStorage.getItem("token"))
  const[selectedFile, setSelectedFile] = useState("")
  const[selected, setSelected] = useState(false)


  useEffect(() => {
    if (token) {
      fetch("/files", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(async (data) => {
          window.localStorage.setItem("token", data.token);
          setToken(window.localStorage.getItem("token"));
          setFiles(data.files);
        });
    }
  }, []);

  const handleNewFile = () => {
    navigate("/newfile")
  }

  const handleFileClick = (event) => {
    console.log(event.target.value)
    setSelectedFile(JSON.stringify(event.target.value))
    setSelected(true)
    console.log(selectedFile)
  }

  return (
  <>
  <div className="home-container">
  <div>
    <h1 className="welcome">
    welcome to your home page
    </h1>
  </div>
  <div className="new-file">
    <button className="new-file-button" onClick={handleNewFile}>create new file</button>
  <div>
    <h3 className="prompt">
    Please select a file
    </h3>
  </div>  
  <div>
    {
      !selected ? (
        files.map((f) =>
          <div key={f.name + f.color} className="file-container">
           <button style={{backgroundColor: f.color}} className="file-button" value={f.name} onClick={handleFileClick}>{f.name}</button>
          </div>
        )
      ) : (
        <div>
          {
            files.find(f => `${f.name}` === selectedFile)
              ? <div>{selectedFile}</div>
              : <div>not found</div>
          }
        </div>
      )
    }
  </div>
  </div>
  </div>
  </>
  )
}

export default MyHome;