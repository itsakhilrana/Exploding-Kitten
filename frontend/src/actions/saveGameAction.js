export const saveGameAction =
  (username, game, cards, defusingCard) => async (dispatch) => {
    try {
      await fetch(`/api/user/${username}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ game, cards, defusingCard }),
      })
    } catch (error) {
      console.log(error)
    }
  }
