import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { gameReducer } from './reducers/gameReducer'
import { leaderBoardReducer } from './reducers/leaderBoardReducer'

const reducer = combineReducers({
  game: gameReducer,
  leaderBoard: leaderBoardReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
