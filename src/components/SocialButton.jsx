import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import Facebook from '../assets/icon/fb.png'
import Google from '../assets/icon/google.png'

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '10px 25px',
    fontWeight: 'normal',
    borderRadius: '20px',

    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
  },
}))

export const SocialButton = ({ children, onClick, google, ...rest }) => {
  const classes = useStyles()

  return (
    <Button
      className={classes.button}
      variant="outlined"
      {...rest}
      onClick={onClick}
      startIcon={
        google ? (
          <img width="30" height="30" src={Google} alt="google" />
        ) : (
          <img width="30" height="30" src={Facebook} alt="facebook" />
        )
      }
    >
      {children}
    </Button>
  )
}
