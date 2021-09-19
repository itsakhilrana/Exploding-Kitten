import { Box, Typography } from '@material-ui/core'

const Rules = () => {
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
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography align="center" style={{color:"#FFC533"}} paragraph>
        <b>Rules</b>
      </Typography>
      <Box style={{ width: '80%', marginTop: '30px' }}>
        <Typography style={{display:"flex"}} paragraph>
        <p>😺</p>
          <p style={{marginLeft:"10px"}}>
            
            If the card drawn from the deck is a cat card, then the card is
            removed from the deck.
          </p>
        </Typography>
        <Typography style={{display:"flex"}} paragraph>
            <p>💣</p>
          <p style={{marginLeft:"10px"}}>
            If the card is exploding kitten (bomb) then the player loses the
            game.
          </p>
        </Typography>
        <Typography style={{display:"flex"}} paragraph>
        <p>🛠</p>
          <p style={{marginLeft:"10px"}}>
            If the card is defusing card, then the card is removed from the
            deck. This card can be used to defuse one bomb that may come in
            subsequent cards drawn from the deck.
          </p>
        </Typography>
        <Typography style={{display:"flex"}} paragraph>
            <p>🔀</p>
          <p style={{marginLeft:"10px"}}>
            If the card is a shuffle card, then the game is restarted and the
            deck is filled with 5 cards again.
          </p>
        </Typography>
      </Box>
    </Box>
  )
}

export default Rules
