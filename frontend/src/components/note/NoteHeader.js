import { React, useState } from 'react';

const NoteHeader = ({title, _id}) => {

  const handleNote = (event) => {
    console.log(event.target.value);
    // <Note />
  }
  
  return (
    <div className="note-button-container">
      <button className="note-header-button" onClick={handleNote} key={_id}>{title}</button>
    </div>
  )
}

export default NoteHeader;