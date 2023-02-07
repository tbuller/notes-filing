import NoteForm from '../note/NoteForm'
import { React, useState, useEffect } from 'react'
import './MyHome.css'
import { json } from 'react-router'

const MyHome = ({ navigate }) => {

  const[files, setFiles] = useState([])
  const[notes, setNotes] = useState([])
  const[token, setToken] = useState(window.localStorage.getItem("token"))
  const[selected, setSelected] = useState(false)
  const[filteredFile, setFilteredFile] = useState([])


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
  }, [token]);

  const handleNewFile = () => {
    navigate("/newfile")
  }

  const handleFileClick = (event) => {
    console.log(event.target.value)
    setSelected(true)    
    setFilteredFile(files.find(f => `${f.name}` === event.target.value))
    if (token) {
      fetch("/note", {
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
        .then((response) => response.json())
        .then(async (data) => {
          setNotes(data.notes);
          window.localStorage.setItem("token", data.token);
          setToken(window.localStorage.getItem("token"));
        })
    }
  }

  return (
    <>
    <div className="home-container">
    <div>
      <h1 className="title">
      welcome to your home page
      </h1>
    </div>
      
    </div>  
    <div>
    {
      !selected ? (
        <div className="new-file">
          <button className="new-file-button" onClick={handleNewFile}>create new file</button>
        </div>,
        <h3 className="prompt">
        Please select a file
        </h3>,
        files.map((f) => (
          <div key={f.name + f.color} className="file-container">
            <button
              style={{ backgroundColor: f.color }}
              className="file-button"
              value={f.name}
              onClick={handleFileClick}
            >
              {f.name}
            </button>
          </div>
        ))
      ) : (
        <div>
          {
             (
              <div className="selected-file-container">
              <div className="selected-button-container">  
              <button
                style={{ backgroundColor: filteredFile.color }}
                className="selected-file-button"
                value={filteredFile.name}
                
              >
                {filteredFile.name}
              </button>
              <div>
                <p>{notes}</p>
              </div>
              </div>
              <NoteForm filteredFile={filteredFile}/>   
              </div>         
            )
            
            
          }
        </div>
      )
    }
  </div>
  
    </>
    )
  
}

export default MyHome;