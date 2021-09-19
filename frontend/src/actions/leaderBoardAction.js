import { PLACE_LEADERBOARD } from '../constants/constants'

export const leaderBoardAction = () => async (dispatch) => {
  try {

    const res = await fetch(`/api/get`)
    const data = await res.json()

    console.log(data)
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
