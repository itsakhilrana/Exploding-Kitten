import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { TextField, Button, Box, Typography } from '@material-ui/core'

import { userGameAction } from '../actions/gameAction'

const UserDetailComp = ({ userGameAction }) => {
  const [username, setUsername] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    userGameAction(username)
  }

  return (
    <form onSubmit={submitHandler}>
      <Typography align="center">Enter A Username</Typography>
      <Box my={5} minWidth="280px">
        <TextField
          label="Username"
          id="standard-size-small"
          size="small"
          value={username}
          fullWidth
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          style={{ backgroundColor: '#FFC533' }}
          type="submit"
          variant="outlined"
        >
          Play
        </Button>
      </Box>
    </form>
  )
}

UserDetailComp.propTypes = {
  userGameAction: PropTypes.func.isRequired,
}

export default connect(null, { userGameAction })(UserDetailComp)
