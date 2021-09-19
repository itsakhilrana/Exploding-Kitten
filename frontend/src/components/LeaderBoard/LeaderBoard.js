import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { leaderBoardAction } from '../../actions/leaderBoardAction'
import { Box, Button, Divider, Typography } from '@material-ui/core'
import { Refresh } from '@material-ui/icons'

const LeaderBoard = ({ leaderBoard, leaderBoardAction }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (leaderBoard.loading) {
      leaderBoardAction()
    } else {
      setUsers([...leaderBoard.users])
    }
  }, [leaderBoard, leaderBoardAction])

  return (
    <Box
      position="relative"
      boxShadow="0 0px 4px 0 rgba(0,0,0,0.12)"
      minHeight="60%"
      pt={2}
      style={{
        color: 'aliceblue',
        backgroundColor: '#232323',
        height: '100vh',
        padding: '20px',
      }}
    >
      <Typography align="center" style={{ color: '#FFC533' }} paragraph>
        <b>LeaderBoard</b>
      </Typography>

      <Box position="absolute" right={0} top={16} cursor="pointer">
        <Button variant="text" onClick={leaderBoardAction}>
          <Refresh style={{ color: 'aliceblue' }} fontSize="small" />
        </Button>
      </Box>

      <Box display="grid" gridGap={5} mt={3}>
        <Box mb={2}>
          <Box px={2} py={1} display="flex" justifyContent="space-between">
            <Typography><b>Username</b></Typography>
            <Typography><b>Points</b></Typography>
          </Box>
          <Divider />
        </Box>
        {users.map((user) => (
          <Box
            key={user._id}
            style={{
              backgroundColor: '#FFC533',
              color: '#232323',
              
            }}
          >
            <Box
              px={2}
              py={1}
              display="flex"
              justifyContent="space-between"
              style={{ textTransform: 'uppercase' }}
            >
              <Typography>
                <b>{user.username}</b>
              </Typography>
              <Typography>
                <b>{user.win}</b>
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

LeaderBoard.propTypes = {
  leaderBoardAction: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  leaderBoard: state.leaderBoard,
})

export default connect(mapStateToProps, { leaderBoardAction })(LeaderBoard)
