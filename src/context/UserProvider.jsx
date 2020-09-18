import React, { createContext, useReducer } from 'react'
import { Actions } from './constants'

const initialState = {
  loggedInUser: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.SET_LOGGED_IN_USER:
      return {
        ...state,
        loggedInUser: action.payload,
      }
    case Actions.SIGN_OUT_USER:
      return {
        ...state,
        loggedInUser: null,
      }
    default:
      return state
  }
}

export const UserContext = createContext(initialState)

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  function setLoggedInUser(user) {
    dispatch({
      type: Actions.SET_LOGGED_IN_USER,
      payload: user,
    })
  }

  function signOutUser() {
    dispatch({
      type: Actions.SIGN_OUT_USER,
    })
  }

  return (
    <UserContext.Provider
      value={{
        loggedInUser: state.loggedInUser,
        setLoggedInUser,
        signOutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
