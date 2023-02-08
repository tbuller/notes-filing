import Note from './Note';
import { React, useState } from 'react';

const NoteHeader = ({title, _id, content}) => {

  const[showNote, setShowNote] = useState(false);

  const handleNote = (event) => {
    console.log(event.target.value);
    setShowNote(!showNote);
  }

  const handleDelete = () => {
    fetch("/note", {
      method: "delete",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify({_id : _id})
    })
      .then((response) => {
        if (response.status === 202) {
          console.log("Note successfully deleted from the database");
        } else {
          console.log("error, couldn't delete the note from the databse");
        }
      })
  }
  
  return (
    <div className="note-button-container">
      <button className="note-header-button" onClick={handleNote} key={_id}>{title}</button>
      <button onClick={handleDelete}>Delete</button>
      {showNote && <Note content={content} />}
    </div>
  )
}

export default NoteHeader;