import { FETCH_DATA } from "../actions/character";

const initialState = {
    characters: []
}

const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                characters: action.payload
            }
        default:
            return state;
    }
}

export default characterReducer;