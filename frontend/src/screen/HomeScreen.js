import React, { useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';

//components
import Modal from '../components/ModalComp'
import UserDetailComp from '../components/userDetailComp';

//assets
import cat from '../assets/cat.png'

const HomeScreen = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      
      style={{backgroundColor:"#232323", display:"flex", justifyContent:"center", alignItems:"center" ,height:"100vh", color:"aliceblue", flexWrap:"wrap", textAlign:"center"}}
    >
      <Box width="100%" >
        <Typography component="h2" style={{color:"#FFC533",fontWeight:"bold"}} variant="h3">
          Exploding Kitten Game
        </Typography>
        <br />
        <br />
        <Box width="100%" >
       <img style={{marginLeft:"40px"}} src={cat} height="150" width="150" alt="cat"/>
        <br />
        <br />
        <Typography component="h3" variant="h6" gutterBottom>
          Click here to start
        </Typography>
        <Button style={{backgroundColor:"#FFC533"}} size="large" onClick={() => setOpen(true)}>
          Let's Start
        </Button>
      </Box>
      </Box>
      

      <Modal open={open} handleClose={() => setOpen(false)}>
        <UserDetailComp/>
      </Modal>
    </Box>
  );
};

export default HomeScreen;
