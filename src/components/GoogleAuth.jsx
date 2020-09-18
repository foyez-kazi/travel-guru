import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import firebase, { signInWithPopup } from '../utils'
import { SocialButton } from './SocialButton'

export const GoogleAuth = ({ from }) => {
  const { setLoggedInUser } = useContext(UserContext)
  const history = useHistory()

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const { user, error } = await signInWithPopup(provider)

    if (!error) {
      setLoggedInUser(user)
      history.replace(from)
    }
  }

  return (
    <div>
      <SocialButton google onClick={() => signInWithGoogle()}>
        Continue with Google
      </SocialButton>
    </div>
  )
}
