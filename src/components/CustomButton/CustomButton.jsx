import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: '#f9a51a',
    color: '#000',
    padding: '10px 25px',
    fontWeight: 'normal',

    '&:hover': {
      backgroundColor: '#f9a51a',
      color: '#000',
    },
  },
}))

export const CustomButton = ({ children, arrow, ...rest }) => {
  const classes = useStyles()

  return (
    <Button
      className={classes.button}
      {...rest}
      endIcon={arrow ? <ArrowForward /> : null}
    >
      {children}
    </Button>
  )
}
