import { PLACE_LEADERBOARD } from '../constants/constants'

const initialState = { users: [], loading: true }

export const leaderBoardReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case PLACE_LEADERBOARD:
      return { ...state, users: [...payload.users], loading: false }

    default:
      return state
  }
}
