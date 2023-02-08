import Note from './Note';
import { React, useState } from 'react';

const NoteHeader = ({title, _id, content}) => {

  const[showNote, setShowNote] = useState(false);

  const handleNote = (event) => {
    console.log(event.target.value);
    setShowNote(!showNote);
  }
  
  return (
    <div className="note-button-container">
      <button className="note-header-button" onClick={handleNote} key={_id}>{title}</button>
      {showNote && <Note content={content} />}
    </div>
  )
}

export default NoteHeader;