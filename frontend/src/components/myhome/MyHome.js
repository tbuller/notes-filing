import File from '../folder/File'
import { React, useState, useEffect } from 'react'
import './MyHome.css'
import { json } from 'react-router'

const MyHome = ({ navigate }) => {

  const[files, setFiles] = useState([])
  const[token, setToken] = useState(window.localStorage.getItem("token"))

  console.log(files)

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

  const handleClick = () => {
    navigate("/newfile")
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
    <button className="new-file-button" onClick={handleClick}>create new file</button>
  <div>
    <h3 className="prompt">
    Please select a file
    </h3>
  </div>  
  <div>
    {files.map((f) =>
    <>
     <div>{f.name}</div>
     <div>{f.color}</div>
     </> 
     )}
  </div>
  </div>
  </div>
  </>
  )
}

export default MyHome;