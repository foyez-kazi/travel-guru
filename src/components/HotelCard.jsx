import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'

import Rating from '../assets/icon/star_1_.png'

const useStyles = makeStyles(() => ({
  img: {
    width: '200px',
    height: '150px',
    borderRadius: '5px',
  },
  hotelDetails: {
    '& h3': {
      marginTop: 0,
      marginBottom: '15px',
    },
  },
  cardRight: {
    color: 'grey',
  },
  properties: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  priceDetail: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

export const HotelCard = ({ hotel }) => {
  const classes = useStyles()

  return (
    <Grid container style={{ margin: '25px 0' }}>
      <Grid item xs={6} style={{ marginRight: '-40px' }}>
        <img className={classes.img} src={hotel.imgUrl} alt={hotel.title} />
      </Grid>
      <Grid item xs={6} className={classes.hotelDetails}>
        <h3>{hotel.title}</h3>
        <div className={classes.cardRight}>
          <div className={classes.properties}>
            <span>{hotel.guest} guests</span>
            <span>{hotel.bedroom} bedrooms</span>
            <span>{hotel.bed} beds</span>
            <span>{hotel.bath} baths</span>
          </div>
          <p>Wif Air conditioning Kitchen</p>
          <p>Cancellation fexibility availiable</p>
          <div className={classes.priceDetail}>
            <span>
              <img width="10" height="10" src={Rating} alt="rating" />{' '}
              {hotel.rating}(20)
            </span>
            <span>${hotel.price}/night</span>
            <span>${hotel.price * 5} total</span>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}
