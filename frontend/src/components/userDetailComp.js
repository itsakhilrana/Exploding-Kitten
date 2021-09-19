import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {

  TextField,
  Button,
  Box,
  Typography,
} from '@material-ui/core'

import { userGameAction } from '../actions/gameAction'


const UserDetailComp = ({ userGameAction }) => {
 

  const [username, setUsername] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    userGameAction(username)
  }

  return (
    <form onSubmit={submitHandler}>
      <Typography align="center" style={{color:"#232323"}}><b>Enter A Username</b></Typography>
      <Box my={5} minWidth="280px">
        <TextField
          
          id="standard-basic"
          size="small"
          value={username}
          
          fullWidth
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          style={{ backgroundColor: '#232323', color:"#FFC533" }}
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
