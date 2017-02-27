import { createStore } from 'redux'
import RootReducer from '../reducers/rootReducer'
import RootMiddleware from '../middleware/rootMiddleware'

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    RootMiddleware
  )
)

export default configureStore
