import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Divider,
  makeStyles,
} from '@material-ui/core'

import Header from '../components/Header/Header'
import LeaderBoard from '../components/LeaderBoard/LeaderBoard'
import Card from '../components/Card/index'
import Rules from '../components/Rules/Rules'

import '../components/Card/style.css'

import { saveGameAction } from '../actions/saveGameAction'

const GameScreen = ({ game, saveGameAction }) => {
  const useStyles = makeStyles(() => ({
    root: {
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      left: 0,
    },

    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
  }))

  const classes = useStyles()

  const [cards, setCards] = useState([])
  const [defusingCard, setDefusingCard] = useState(0)
  const [tabs, setTabs] = useState({
    playGame: true,
    leadBoard: false,
    rules: false,
  })

  const [gameStatus, setGameStatus] = useState({
    played: 0,
    win: 0,
    loose: 0,
    status: 'loading',
  })

  const { played, win, loose, status } = gameStatus

  const startGame = (game) => {
    let GetCards = []
    let defusing = 0

    if (game?.savedGame && game?.savedGame?.cards?.length > 0) {
      GetCards = [...game?.savedGame.cards]
      defusing = game?.savedGame.defusingCard
    } else {
      const gameCards = ['cat', 'bomb', 'defusing', 'shuffle']

      for (let i = 0; i < 5; i++) {
        const index = Math.round(Math.random() * 3)

        GetCards.push(gameCards[index])
      }

      setGameStatus((oldGameStatus) => ({
        ...oldGameStatus,
        status: 'running',
      }))
    }

    setGameStatus((oldGameStatus) => ({
      ...oldGameStatus,
      played: game?.played || oldGameStatus?.played,
      win: game?.win || oldGameStatus?.win,
      loose: game?.loose || oldGameStatus?.loose,
      status: 'running',
    }))

    setCards([...GetCards])
    setDefusingCard(defusing)
  }

  useEffect(() => {
    if (game?.username) startGame(game)
  }, [game])

  const drawCardHandler = (id) => {
    const el = document.querySelector(`#${id}`)

    console.log(el)

    el.classList.add('card--flipped')

    setTimeout(() => {
      runGameLogic()
    }, 800)
  }

  const runGameLogic = () => {
    let leftCards = cards
    let lastCard = leftCards.pop()

    const stats = {
      defusingCard,
      played,
      win,
      loose,
      status,
    }

    if (lastCard === 'shuffle') {
      stats.status = 'restarting'
      stats.defusingCard = 0

      setTimeout(() => {
        startGame()
      }, 1000)
    } else if (lastCard === 'defusing') {
      stats.defusingCard++
    } else if (lastCard === 'bomb') {
      if (defusingCard > 0) {
        stats.defusingCard--

        lastCard = 'defusing'
      } else {
        stats.played++
        stats.loose++
        stats.status = 'loose'
        stats.defusingCard = 0
      }
    }

    if (leftCards.length === 0 && lastCard !== 'bomb') {
      stats.defusingCard = 0
      stats.played++
      stats.win++
      stats.status = 'win'
    }

    setGameValues(
      leftCards,
      stats.defusingCard,
      stats.played,
      stats.win,
      stats.loose,
      stats.status
    )
  }

  const setGameValues = (gCards, gDefusing, gPlayed, gWin, gLoose, gStatus) => {
    setCards([...gCards])
    setDefusingCard(gDefusing)
    setGameStatus((oldGameStatus) => ({
      ...oldGameStatus,
      played: gPlayed,
      win: gWin,
      loose: gLoose,
      status: gStatus,
    }))
    saveGameAction(
      game?.username,
      {
        played: gPlayed,
        win: gWin,
        loose: gLoose,
      },
      gStatus === 'running' ? gCards : [],
      gDefusing
    )
  }

  return (
    <Box
      position="relative"
      style={{ backgroundColor: '#191919', fontFamily: 'Montserrat' }}
    >
      <Header username={game.username} />
      <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
        <p
          style={
            tabs.playGame
              ? { color: '#FFC533', backgroundColor: '#232323', padding: '8px' }
              : { color: '#e0e0e0', opacity: '25%', padding: '8px' }
          }
          onClick={() => {
            setTabs({ ...tabs, playGame: true, leadBoard: false, rules: false })
          }}
        >
          Play Game
        </p>
        <p
          style={
            tabs.leadBoard
              ? { color: '#FFC533', backgroundColor: '#232323', padding: '8px' }
              : { color: '#e0e0e0', opacity: '25%', padding: '8px' }
          }
          onClick={() => {
            setTabs({ ...tabs, playGame: false, leadBoard: true, rules: false })
          }}
        >
          Leader Board
        </p>
        <p
          style={
            tabs.rules
              ? { color: '#FFC533', backgroundColor: '#232323', padding: '8px' }
              : { color: '#e0e0e0', opacity: '25%', padding: '8px' }
          }
          onClick={() => {
            setTabs({ ...tabs, playGame: false, leadBoard: false, rules: true })
          }}
        >
          Rules
        </p>
      </Box>
      {tabs.leadBoard && (
        <Grid item xs={12} md={12}>
          <LeaderBoard />
        </Grid>
      )}
      {tabs.rules && <Rules />}
      {tabs.playGame && (
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Box
                boxShadow="0 0px 4px 0 rgba(0,0,0,0.12)"
                mb={4}
                pt={2}
                style={{
                  color: 'aliceblue',
                  backgroundColor: '#232323',
                }}
              >
                <Typography
                  style={{ color: '#FFC533' }}
                  paragraph
                  align="center"
                >
                  <b>Game Stats</b>
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box
                    px={4}
                    py={2}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography style={{ color: '#FFC533' }}>
                      <b>{gameStatus.played}</b>
                    </Typography>
                    <Typography>Played</Typography>
                  </Box>

                  <Divider />

                  <Box
                    px={4}
                    py={2}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography style={{ color: '#FFC533' }}>
                      <b>{gameStatus.win}</b>
                    </Typography>
                    <Typography>Win</Typography>
                  </Box>

                  <Divider />

                  <Box
                    px={4}
                    py={2}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography style={{ color: '#FFC533' }}>
                      <b>{gameStatus.loose}</b>
                    </Typography>
                    <Typography>Loose</Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                position="relative"
                width="100%"
                minHeight="70vh"
                boxShadow="0 0px 4px 0 rgba(0,0,0,0.12)"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box display="flex" justifyContent="center" alignItems="center">
                  {gameStatus.status === 'running' && (
                    <Box position="relative" width={285} height={290} mt={5}>
                      {cards.map((card, key) => (
                        <Box
                          className={classes.root}
                          zIndex={key}
                          key={key + card}
                          onClick={() => drawCardHandler(card + key)}
                        >
                          <Card id={card + key} card={card} />
                        </Box>
                      ))}
                    </Box>
                  )}

                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    py={1}
                    style={gameStatus.status === 'win' ? {
                      color: 'aliceblue',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#47ffac',
                    } : gameStatus.status === 'loose' ? {
                      color: 'aliceblue',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#ff3f3f',
                    } :{
                      color: '#232323',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#FFC533', }}
                  >
                    {gameStatus.status === 'loose' ||
                    gameStatus.status === 'win' ? (
                      <Typography>
                        <b>You {status === 'win' ? '🤩 won' : '🙁 lost'}</b>
                      </Typography>
                    ) : (
                      <Typography>
                        <b>{cards.length} cards left</b>
                      </Typography>
                    )}
                  </Box>
                  <Box
                    position="absolute"
                    top={30}
                    right={0}
                    py={1}
                    style={{
                      color: 'aliceblue',
                    }}
                  >
                    <Box
                      px={4}
                      py={2}
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography style={{ color: '#FFC533' }}>
                        <b>{defusingCard}</b>
                      </Typography>
                      <Typography>Defuse Card</Typography>
                    </Box>
                  </Box>

                  {gameStatus.status === 'restarting' && (
                    <Typography style={{ color: '#FFC533' }}>
                      <b>Shuffling ...</b>
                    </Typography>
                  )}

                  {(gameStatus.status === 'loose' ||
                    gameStatus.status === 'win') && (
                    <Box>
                      <Button
                        style={{ backgroundColor: '#FFC533' }}
                        onClick={() => startGame()}
                        variant="contained"
                      >
                        Click Here to play Again
                      </Button>
                    </Box>
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}
    </Box>
  )
}

GameScreen.propTypes = {
  syncGameToDB: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  game: state.game,
})

export default connect(mapStateToProps, { saveGameAction })(GameScreen)
