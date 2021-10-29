import { createStore } from 'redux'
import users from './reducers/users'
const store = createStore(
    users,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
