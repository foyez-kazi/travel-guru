import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'

import { UserContext } from '../context/UserProvider'
import Logo from '../assets/Logo.png'
import { CustomButton } from './CustomButton/CustomButton'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '50px',
    display: 'flex',
    alignItems: 'center',

    '& a': {
      textDecoration: 'none',
      marginLeft: theme.spacing(2),
    },
  },
  user: {
    marginLeft: theme.spacing(2),
    fontWeight: 'bold',
  },
  logoBox: {
    display: 'flex',
    marginRight: 'auto',
    alignItems: 'center',
  },
  logo: {
    width: '80px',
    height: '50px',
    marginRight: '20px',
  },
  whiteNavLink: {
    '& a': {
      color: '#fff',
    },
  },
  blackNavLink: {
    '& a': {
      color: '#000',
    },
  },
  searchBox: {
    width: '100%',
    padding: '5px',
    height: '40px',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid #FFFFFF',
    boxSizing: 'border-box',
    borderRadius: '5px',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#fff',

    '&::placeholder': {
      color: '#fff',
      opacity: 1,
    },
  },
}))

export const Navigation = () => {
  const classes = useStyles()
  const { loggedInUser } = useContext(UserContext)
  const location = useLocation()
  const withBackground = !(
    location.pathname === '/login' || /\/hotels\/*/.test(location.pathname)
  )

  return (
    <Typography className={classes.root}>
      <span className={classes.logoBox}>
        <Link to="/"></Link>
        {withBackground ? (
          <>
            <Link to="/">
              <img
                style={{
                  filter:
                    'invert(76%) sepia(97%) saturate(23%) hue-rotate(43deg) brightness(114%) contrast(108%)',
                }}
                className={classes.logo}
                src={Logo}
                alt="logo"
              />
            </Link>
            <input
              className={classes.searchBox}
              type="text"
              placeholder="Search your Destination..."
            />
          </>
        ) : (
          <Link to="/">
            <img className={classes.logo} src={Logo} alt="logo" />
          </Link>
        )}
      </span>
      <span
        className={withBackground ? classes.whiteNavLink : classes.blackNavLink}
      >
        <Link to="/news">News</Link>
        <Link to="/destination">Destination</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </span>

      {loggedInUser ? (
        <span className={classes.user}>
          {loggedInUser.displayName || loggedInUser.email}
        </span>
      ) : (
        <Link to="/login">
          <CustomButton>Login</CustomButton>
        </Link>
      )}
    </Typography>
  )
}
