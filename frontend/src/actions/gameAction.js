import { PLACE_USER } from '../constants/constants'

export const userGameAction = (username) => async (dispatch) => {
  try {
    const res = await fetch(`url`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
    const data = await res.json()

    dispatch({
      type: PLACE_USER,
      payload: {},
    })
  } catch (error) {
    console.log(error)
  }
}
