const initialState = {
    users: [],
}
const users = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: [...state.users, action.payload],
            }
        default:
            return state
    }
}
export default users
