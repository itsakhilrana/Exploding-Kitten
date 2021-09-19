import { PLACE_USER } from '../constants/constants'

export const userGameAction = (username) => async (dispatch) => {
  try {
    const res = await fetch(`/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username}),
    })
    const data = await res.json()

    dispatch({
      type: PLACE_USER,
      payload: {username,
        savedGame: { ...data.user.savedGame },
        win: data.user.win,
        loose: data.user.loose,
        played: data.user.gamesPlayed,},
    })
  } catch (error) {
    console.log(error)
  }
}
