import firebase from 'firebase/app'
import 'firebase/auth'

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
}

firebase.initializeApp(firebaseConfig)

export const signInWithPopup = async (provider) => {
  try {
    const result = await firebase.auth().signInWithPopup(provider)
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken
    const { displayName, email, photoURL } = result.user
    const user = { displayName, email, photoURL }

    return { user, token }
  } catch (error) {
    return { error }
  }
}

export const validateField = (field) => {
  let errors = []
  if (field.name === 'email') {
    const isValid = /\S+@\S+\.\S+/.test(field.value)
    errors = !isValid && [{ field: 'email', message: 'Invalid email address' }]
  }

  if (field.name === 'password') {
    const isValid = field.value.length > 5
    errors = !isValid && [
      { field: 'password', message: 'length must be greater than 5' },
    ]
  }

  return errors || []
}

export const toErrorMap = (errors) => {
  const errorMap = {}
  errors.forEach(({ field, message }) => {
    errorMap[field] = message
  })

  return errorMap
}

export default firebase
