import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useLocation } from 'react-router-dom'

import BackgroundImg from '../assets/img/Rectangle-1.png'
import { Navigation } from './Navigation'

const useStyles = makeStyles(() => ({
  container: {
    backgroundImage: `url(${BackgroundImg}), linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) )`,
    minHeight: '100%',
    width: '100%',
    height: 'auto',
    position: 'fixed',
    top: 0,
    left: 0,
  },
  layout: {
    margin: 'auto',
    maxWidth: '1100px',
  },
}))

export const Layout = ({ children }) => {
  const classes = useStyles()
  const location = useLocation()
  const withBackground = !(
    location.pathname === '/login' || /\/hotels\/*/.test(location.pathname)
  )

  return (
    <div className={withBackground ? classes.container : null}>
      <div className={classes.layout}>
        <Navigation />
        {children}
      </div>
    </div>
  )
}
