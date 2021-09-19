import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import './App.css'

//screens
import HomeScreen from './screen/HomeScreen'
import GameScreen from './screen/GameScreen'

function App({ game }) {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setUserName(game?.username);
  }, [game]);

  return (
    <Box>{userName ? <GameScreen /> : <HomeScreen />}</Box>
  )
}

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps)(App);
