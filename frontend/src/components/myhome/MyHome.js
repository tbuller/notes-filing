import NoteForm from '../note/NoteForm'
import { React, useState, useEffect } from 'react'
import './MyHome.css'
import NoteHeader from '../note/NoteHeader'
// import { useNotesContext } from '../../hooks/useNotesContext';

const MyHome = ({ navigate }) => {

  // const {workouts, dispatch} = useNotesContext()
  const[files, setFiles] = useState([]);
  const[notes, setNotes] = useState([]);
  const[token, setToken] = useState(window.localStorage.getItem("token"));
  const[selected, setSelected] = useState(false);
  const[filteredFile, setFilteredFile] = useState([]);
  const[showButton, setShowButton] = useState([]);
  const[counter, setCounter] = useState(0);


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
          console.log(window.localStorage);
          setToken(window.localStorage.getItem("token"));
          setFiles(data.files);
        });
    }
  }, [token]);

  useEffect((event) => {
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
          console.log(counter);                   
        })
    }
  }, [counter, token])

  const handleNewFile = () => {
    navigate("/newfile")
  }

  const handleFileClick = async (event) => {
    console.log(event.target.value)
    setSelected(true)    
    setFilteredFile(files.find(f => `${f.name}` === event.target.value))
  }

  return (
    <>
    <div className="home-container">
    <div>
      <h1 className="title">
      Welcome to your home page
      </h1>
    </div>
    <div className="new-file">
      <button className="new-file-button" onClick={handleNewFile}>create new file</button>
    </div>     
    </div>  
    <div>
    {
      !selected ? (
        files.map((f) => {
          if (f.userId === window.localStorage.getItem("userId")) {
          return (
          <div key={f.name + f.color} className="file-container">
            <button
              style={{ backgroundColor: f.color }}
              className="file-button"
              value={f.name}
              onClick={handleFileClick}
            >
              {f.name}
            </button>
          </div> )}
})
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
                <div>
                  {
                  notes.map((n) => n.file === filteredFile.name ?  
                  <NoteHeader title={n.title} key={n._id} content={n.content} value={n._id} notes={notes} setNotes={setNotes} showButton={n.showButton} setShowButton={setShowButton} _id={n._id} /> :
                  <div></div>
                  )
                  }     
                </div>
              </div>
              </div>
              <NoteForm filteredFile={filteredFile} setNotes={setNotes} notes={notes} counter={counter} setCounter={setCounter} />   
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