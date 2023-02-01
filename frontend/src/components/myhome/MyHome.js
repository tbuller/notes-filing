import { React, useState, useEffect } from 'react'
import { json } from 'react-router'

const MyHome = ({ navigate }) => {

  const[files, setFiles] = useState([])
  const[token, setToken] = useState(window.localStorage.getItem("token"))

  console.log(token)

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
  </div>
  </>
  )
}

export default MyHome;