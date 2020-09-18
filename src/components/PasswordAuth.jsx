import {
  Card,
  CardActions,
  CardContent,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { UserContext } from '../context/UserProvider'
import firebase, { toErrorMap, validateField } from '../utils'
import { CustomButton } from './CustomButton/CustomButton'

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    margin: 'auto',
    padding: '10px 30px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export const PasswordAuth = ({ from }) => {
  const classes = useStyles()
  const [isLogIn, setIsLogIn] = useState(true)
  const [user, setUser] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState(null)
  const { setLoggedInUser } = useContext(UserContext)
  const history = useHistory()

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    setErrors(toErrorMap(validateField(e.target)))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user.email && !user.password)
      return setErrors({ email: 'email is required' })

    try {
      if (!isLogIn) {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(user.email, user.password)

        const currentUser = firebase.auth().currentUser
        await currentUser.updateProfile({
          displayName: user.name,
        })
        const { name, email } = user
        setLoggedInUser({ email, displayName: name })
        history.replace(from)
      } else {
        const res = await firebase
          .auth()
          .signInWithEmailAndPassword(user.email, user.password)

        const { displayName, email } = res.user
        setLoggedInUser({ displayName, email })
        history.replace(from)
      }
    } catch (err) {
      console.log(err)
      if (err.code === 'auth/email-already-in-use') {
        setErrors({ email: err.message })
      }

      if (err.code === 'auth/wrong-password') {
        setErrors({ password: err.message })
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              {isLogIn ? 'Login' : 'Create an account'}
            </Typography>
            {!isLogIn && (
              <TextField
                fullWidth
                label="Name"
                name="name"
                onChange={handleChange}
              />
            )}
            <TextField
              fullWidth
              label="Email"
              name="email"
              onChange={handleChange}
            />
            {errors?.email && (
              <>
                <br />
                <span style={{ color: 'red' }}>{errors.email}</span>
              </>
            )}
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              onChange={handleChange}
            />
            {errors?.password && (
              <>
                <br />
                <span style={{ color: 'red' }}>{errors.password}</span>
              </>
            )}
            <br />
            <br />
            <span>
              Don't have an account? Sign up{' '}
              <input
                type="checkbox"
                onChange={(e) => setIsLogIn(e.target.checked ? false : true)}
              />
            </span>
            <br />
          </CardContent>
          <CardActions>
            <CustomButton fullWidth type="submit">
              {isLogIn ? 'Login' : 'Create an account'}
            </CustomButton>
          </CardActions>
        </Card>
      </form>
    </div>
  )
}
