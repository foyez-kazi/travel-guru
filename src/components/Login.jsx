import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { FacebookAuth } from './FacebookAuth'
import { GoogleAuth } from './GoogleAuth'
import { PasswordAuth } from './PasswordAuth'

const useStyles = makeStyles({
  socialButtons: {
    textAlign: 'center',
    '& button': {
      marginBottom: '10px',
    },
  },
})

export const Login = () => {
  const classes = useStyles()
  const location = useLocation()

  const { from } = location.state || { from: { pathname: '/' } }

  return (
    <div>
      <PasswordAuth from={from} />
      <hr />
      <div className={classes.socialButtons}>
        <GoogleAuth from={from} />
        <FacebookAuth from={from} />
      </div>
    </div>
  )
}
