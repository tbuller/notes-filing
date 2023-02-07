import { React, useState } from 'react';

const NoteHeader = ({title}) => {
  
  return (
    <div className="note-button-container">
      <button className="note-header-button">{title}</button>
    </div>
  )
}

export default NoteHeader;