export const saveGameAction = () => async (dispatch) => {
  try {
    await fetch(`url with userName`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
  } catch (error) {
    console.log(error)
  }
}
