import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { UserContext } from '../context/UserProvider'
import firebase from '../utils'
import { signInWithPopup } from '../utils'
import { SocialButton } from './SocialButton'

export const FacebookAuth = ({ from }) => {
  const { setLoggedInUser } = useContext(UserContext)
  const history = useHistory()

  const signInWithFacebook = async () => {
    const provider = new firebase.auth.FacebookAuthProvider()
    const { user, error } = await signInWithPopup(provider)

    if (!error) {
      setLoggedInUser(user)
      history.replace(from)
    }
  }

  return (
    <div>
      <SocialButton onClick={() => signInWithFacebook()}>
        sign in with Facebook
      </SocialButton>
    </div>
  )
}
