import { PLACE_USER } from '../constants/constants'

const initialState = {
  username: '',
  savedGame: { cards: [], defusingCard: 0 },
  played: 0,
  win: 0,
  loose: 0,
}

export const gameReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case PLACE_USER:
      return {
        ...state,
        username: payload.username,
        savedGame: payload.savedGame,
        played: payload.played,
        win: payload.win,
        loose: payload.loose,
      }

    default:
      return state
  }
}
