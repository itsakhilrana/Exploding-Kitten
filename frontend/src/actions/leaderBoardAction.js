import { PLACE_LEADERBOARD } from '../constants/constants'

export const leaderBoardAction = () => async (dispatch) => {
  try {

    const res = await fetch(`url`)
    const data = await res.json()

    dispatch({
      type: PLACE_LEADERBOARD,
      payload: {
        users: data.users,
      },
    })
  } catch (error) {
    console.log(error)
  }
}
