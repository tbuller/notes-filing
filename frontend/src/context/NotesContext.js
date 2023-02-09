import { createContext, useReducer } from 'react';

export const NotesContext = createContext()

export const notesReducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTES":
      return {
        notes: action.payload
      }
    case "CREATE_NOTE":
      return {
        notes: [action.payload, ...state.notes]
      } 
    default:
      return state
  }
}

export const NotesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, {
    notes: null
  })

  return (
    <NotesContextProvider value={{state, dispatch}}>
      { children }
    </NotesContextProvider>
  )
}