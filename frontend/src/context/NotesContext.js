import { createContext, useReducer } from 'react';

export const NotesContext = createContext()

export const NotesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, {
    notes: null
  })

  dispatch({ type: "SET_NOTES", payload: [{}, {}] })

  return (
    <NotesContextProvider value={}>
      { children }
    </NotesContextProvider>
  )
}