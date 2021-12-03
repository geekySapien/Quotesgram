// we have action in action.js
// we have state in context.js
// but how are we gonna update state according to action, here reducer comes
// into play

const Reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                isFetching: true,
                error: false,
            };
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };
        case 'LOGIN_FAILURE':
            return {
                user: null,
                isFetching: false,
                error: true,
            };
        default:
            return state;
    }
}

export default Reducer;