import { TOGGLE } from './../types';

const userReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE:
            return {
                ...state,
                toggle: !state.toggle
            }
            break;
    
        default:
            return state;
            break;
    }
}

export default userReducer