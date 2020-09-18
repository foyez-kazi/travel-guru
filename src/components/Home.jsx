import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Grid, makeStyles } from '@material-ui/core'

import { CustomButton } from './CustomButton/CustomButton'
import { locations } from '../fakeData/data'
import Sajek from '../assets/img/Sajek.png'
import Sreemongol from '../assets/img/Sreemongol.png'
import Sundorbans from '../assets/img/Sundorbans.png'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
const imgUrls = { Sajek, Sreemongol, Sundorbans }

const useStyles = makeStyles((theme) => {
  return {
    home: {
      paddingTop: '100px',
    },
    locationCard: {
      marginRight: '10px',
      // backgroundImage: `url(${Sajek}), linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 69.96%)`,
      // background: `url(${Sajek})`,
      borderRadius: '20px',
      width: '180px',
      height: '280px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
    },
    title: {
      position: 'absolute',
      bottom: 0,
      left: '10%',
      // transform: 'translateX(-50%)',
      color: '#fff',
      textTransform: 'uppercase',
    },
    arrowButtons: {
      textAlign: 'center',
      marginTop: '50px',
    },
    descBox: {
      color: '#fff',
      marginBottom: '50px',
      width: '70%',
      '& h1': {
        textTransform: 'uppercase',
        fontSize: '40px',
      },
    },
    arrowBtn: {
      background: '#fff',
      border: 'none',
      borderRadius: '50%',
      padding: '5px',
      marginRight: '15px',
      cursor: 'pointer',
    },
  }
})

export const Home = () => {
  const classes = useStyles()
  const [location, setLocation] = useState(locations[0])

  const handleNext = () => {
    const locationIndex = locations.findIndex((loc) => loc.id === location.id)
    if (locationIndex + 1 < locations.length) {
      setLocation(locations[locationIndex + 1])
    } else {
      setLocation(locations[0])
    }
  }
  const handlePrev = () => {
    const locationIndex = locations.findIndex((loc) => loc.id === location.id)
    if (locationIndex - 1 < 0) {
      setLocation(locations[locations.length - 1])
    } else {
      setLocation(locations[locationIndex - 1])
    }
  }

  return (
    <div className={classes.home}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className={classes.descBox}>
            <h1>{location.title}</h1>
            <p>{location.description.slice(0, 150)}...</p>
          </div>
          <Link
            to={`/booking/${location.id}`}
            style={{ textDecoration: 'none' }}
          >
            <CustomButton arrow>Booking</CustomButton>
          </Link>
        </Grid>
        <Grid item xs={6} style={{ display: 'flex' }}>
          {locations.map((loc) => (
            <div
              key={loc.id}
              className={classes.locationCard}
              style={{
                backgroundImage: `url(${
                  imgUrls[loc.imgName]
                }), linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 69.96%)`,
                border: `${
                  loc.id === location.id ? '2px solid #f9a51a' : 'none'
                }`,
              }}
            >
              <h2 className={classes.title}>{loc.title}</h2>
            </div>
          ))}
        </Grid>
      </Grid>

      <div className={classes.arrowButtons}>
        <button onClick={handlePrev} className={classes.arrowBtn}>
          <ArrowBackIos />
        </button>
        <button onClick={handleNext} className={classes.arrowBtn}>
          <ArrowForwardIos />
        </button>
      </div>
    </div>
  )
}
