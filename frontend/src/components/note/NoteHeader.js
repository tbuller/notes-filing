import Note from './Note';
import { React, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';

const NoteHeader = ({title, _id, content, setNotes, notes}) => {

  const[showNote, setShowNote] = useState(false);

  const handleNote = (event) => {
    console.log(event.target.value);
    setShowNote(!showNote);
  }

  const handleDelete = (event) => {
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
          setNotes(notes.filter(note => note._id !== _id));
        } else {
          console.log("error, couldn't delete the note from the database");
        }
      })
      window.location.reload(true);
  }
  
  return (
    <div className="note-button-container">
      <button className="note-header-button" onClick={handleNote} key={_id}>{title}</button>
      <span className="delete-note-button-container">
      <button onClick={handleDelete} className="delete-note-button"><RxCross1 background-color="white" /></button>
      </span>
      {showNote && <Note content={content} />}
    </div>
  )
}

export default NoteHeader;