import { React, useState, useEffect } from 'react'

const NoteForm = ({ navigate }) => {
  
  const[title, setTitle]= useState("")
  const[content, setContent] = useState("")

  const handleSubmit = async (event) => {
    fetch("/note", {
      method: "post",
      headers: {
        "Content-type" : "application/json",
      },
      body: JSON.stringify({ title: title, content: content })
    })
    .then((response) => {
      if(response.status === 201) {
        console.log("note successfully added to the database")
      } else {
        console.log("error, note couldn't be passed onto the database")
      }
    })
  }

  const handleTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleContent = (event) => {
    setContent(event.target.value)
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
    </form>
    </div>
    
  )
}

export default NoteForm