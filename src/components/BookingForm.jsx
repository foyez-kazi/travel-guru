import 'date-fns'
import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import { TextField, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  datePicker: {
    display: 'flex',
  },
  keyboardDate: {
    width: '40%',
    marginRight: '5%',
  },
})

export const BookingForm = () => {
  const classes = useStyles()
  const [selectedDate, setSelectedDate] = React.useState({
    from: new Date('2014-08-18T21:11:54'),
    to: new Date('2014-08-18T21:11:54'),
  })

  const handleDateChange = (name) => (date) => {
    console.log(selectedDate)
    setSelectedDate({ ...selectedDate, [name]: date })
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Box marginBottom={2}>
        <TextField
          id="filled-multiline-flexible1"
          label="Origin"
          fullWidth
          variant="filled"
        />
      </Box>
      <Box marginBottom={2}>
        <TextField
          id="filled-multiline-flexible2"
          label="Destination"
          fullWidth
          variant="filled"
        />
      </Box>
      <div className={classes.datePicker}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM"
          id="date-picker-inline1"
          label="From"
          className={classes.keyboardDate}
          value={selectedDate.from}
          onChange={handleDateChange('from')}
          inputVariant="filled"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          className={classes.keyboardDate}
          disableToolbar
          variant="inline"
          format="dd/MM"
          id="date-picker-inline2"
          label="To"
          value={selectedDate.to}
          inputVariant="filled"
          onChange={handleDateChange('to')}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </div>
    </MuiPickersUtilsProvider>
  )
}
