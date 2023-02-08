import { React, useState, useEffect } from 'react'

const NoteForm = ({ navigate, filteredFile }) => {
  
  const[title, setTitle]= useState("")
  const[content, setContent] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestBody = ({title: title, content: content, file: filteredFile.name});
    console.log(requestBody);
    fetch("/note", {
      method: "post",
      headers: {
        "Content-type" : "application/json",
      },
      body: JSON.stringify(requestBody),
    })
    .then((response) => {
      if(response.status === 201) {
        console.log("note successfully added to the database");
      } else {
        console.log("error, note couldn't be passed onto the database");
        console.log(response.status);
      }
    })
    window.location.reload(true);
  }

  const handleTitle = (event) => {
    setTitle(event.target.value);
  }

  const handleContent = (event) => {
    setContent(event.target.value);
  }

  return (
    <div>
    <h1 className="title">New note</h1>
    <form className="note-form" onSubmit={handleSubmit}>
    <div>
    <div>
    <label>Pick a title for your note!</label>
    </div>
    <input type="text" className="note-title" onChange={handleTitle}/>
    </div>
    <div>
    <div>
    <label>Type your content here</label>  
    </div>
    <textarea className="note-content" onChange={handleContent}/>
    </div>
    <input type="submit" className="submit-form" />
    </form>
    </div>
    
  )
}

export default NoteForm;