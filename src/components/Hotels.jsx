import { Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { hotels as hotelsData, locations } from '../fakeData/data'
import { HotelCard } from './HotelCard'
import { GoogleMap } from './GoogleMap'

export const Hotels = () => {
  const [hotels, setHotels] = useState([])
  const [locationTitle, setLocationTitle] = useState('')
  const { locationId } = useParams()

  useEffect(() => {
    const filteredHotels = hotelsData.filter(
      (hotel) => hotel.locationId === Number(locationId),
    )
    const loc = locations.find((loc) => loc.id === Number(locationId))
    setLocationTitle(loc.title)
    setHotels(filteredHotels)
  }, [locationId])

  return (
    <div style={{ marginTop: '100px' }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <p>252 stays Apr 13-17 3 guests</p>
          <Typography variant="h5" component="h2">
            Stay in {locationTitle}
          </Typography>
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </Grid>
        <Grid item xs={6}>
          <GoogleMap />
        </Grid>
      </Grid>
    </div>
  )
}
