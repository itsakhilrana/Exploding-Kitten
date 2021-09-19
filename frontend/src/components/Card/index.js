import React from 'react'
import cardCovid from '../../assets/cardCover.png'

const index = ({ id, card }) => {
  console.log(card)
  return (
    <div class="card-scene">
      <div id={id} class="card">
        <div class="card-face card-backing">
          <div class="grain-overlay" style={{background:`${cardCovid}`}}></div>

          <div class="top-banner">Click to Flip</div>
         
        </div>
        <div
          class="card-face card-front"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor:"white"
          }}
        >
          <h1>{card}</h1>
          <div class="main-pane">
            <img class="slugger" src={`/assets/${card}.png`} alt="card front" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
