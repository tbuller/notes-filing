import { React } from 'react'

const Note = ({ title, content, file }) => {

  return (
  <div>
  <h1>{title} in folder: {file}</h1>
  <div>
    <p>{content}</p>
  </div>
  </div>  
  )
}