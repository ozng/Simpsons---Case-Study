import { ADD_CHARACTER, CHANGE_ORDER, DELETE_CHARACTER, FETCH_DATA } from "../actions/character";
import { changeIndex } from "../actions/helpers/actionHelpers";
import Character from '../../../models/Character'

const initialState = {
    characters: [],
}

const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                characters: action.payload,
            }
        case ADD_CHARACTER:
            const newCharacter = new Character(
                action.payload.id,
                action.payload.character.name,
                action.payload.character.description,
                action.payload.character.job,
                action.payload.character.avatar,
            )
            return {
                ...state,
                characters: state.characters.concat(newCharacter)
            }
        case DELETE_CHARACTER:
            const charID = action.payload
            return {
                ...state,
                characters: state.characters.filter(character => character.id !== charID)
            }
        case CHANGE_ORDER:
            const changedOrder = changeIndex(state.characters, action.payload.id, action.payload.type)
            let arr = []
            return {
                ...state,
                characters: arr.concat(changedOrder)
            }
        default:
            return state;
    }
}

export default characterReducer;