import File from '../folder/File'
import { React, useState, useEffect } from 'react'
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
    navigate("/newfolder")
  }

  return (
  <>
  <div>welcome to your home page</div><div>
    <button onClick={handleClick}>create folder</button>
  <div>Here are the files</div>  
  <div>
    {files.map((f) => f.name)} 
    <br/>
    {files.map((f) => f.color)}
  </div>
  </div>
  </>
  )
}

export default MyHome;