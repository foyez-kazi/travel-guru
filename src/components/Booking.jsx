import {
  Card,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
} from '@material-ui/core'
import 'date-fns'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { locations } from '../fakeData/data'
import { BookingForm } from './BookingForm'
import { CustomButton } from './CustomButton/CustomButton'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  descBox: {
    color: '#fff',
    width: '70%',
    '& h1': {
      textTransform: 'uppercase',
      fontSize: '40px',
    },
  },
}))

export const Booking = () => {
  const classes = useStyles()
  const [content, setContent] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const location = locations.find((loc) => loc.id === Number(id))
    setContent(location)
  }, [id])

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className={classes.descBox}>
            <h1>{content.title}</h1>
            <p>{content.description}</p>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.root}>
            <CardContent>
              <BookingForm />
            </CardContent>
            <CardActions style={{ display: 'block' }}>
              <Link to={`/hotels/${id}`} style={{ textDecoration: 'none' }}>
                <CustomButton fullWidth>Start Booking</CustomButton>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
