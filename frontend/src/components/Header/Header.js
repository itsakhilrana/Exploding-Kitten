import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { Person } from '@material-ui/icons'

import cat from '../../assets/cat.png'
const Header = ({ username }) => {
  return (
    <Box
      boxShadow="0 1px 5px 1px rgba(0,0,0,0.25)"
      mb={1}
      px={{ xs: 2, md: 5 }}
      py={2}
      style={{
        color: 'aliceblue',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#232323',
      }}
    >
      <Box
        style={{
          display: 'flex',
          justifyContent: "space-around",
          alignItems: 'center',
        }}
      >
        <img src={cat} height="30" width="30" alt="cat" />
        <Typography component="h1" variant="h5">
          Exploding Kitten
        </Typography>
      </Box>

      <Typography
        component="div"
        style={{ alignItems: 'center', display: 'flex' }}
      >
        <Box component="span" px="4px" style={{ color: '#FFC533' }}>
          <Person fontSize="medium" />
        </Box>
        <b>{username}</b>
      </Typography>
    </Box>
  )
}

export default Header
