import {
  ADD_CHARACTER,
  CHANGE_ORDER,
  DELETE_CHARACTER,
  FETCH_DATA,
} from "../actions/character";
import Character from "../../../models/Character";

const initialState = {
  characters: [],
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      const fetchedCharacters = action.payload;
      return {
        ...state,
        characters: fetchedCharacters,
      };
    case ADD_CHARACTER:
      const newCharacter = new Character(
        action.payload.id,
        action.payload.character.name,
        action.payload.character.description,
        action.payload.character.job,
        action.payload.character.avatar
      );
      return {
        ...state,
        characters: state.characters.concat(newCharacter),
      };
    case DELETE_CHARACTER:
      const charID = action.payload;
      return {
        ...state,
        characters: state.characters.filter(
          (character) => character.id !== charID
        ),
      };
    case CHANGE_ORDER:
      let arr = [];
      return {
        ...state,
        characters: arr.concat(action.payload),
      };
    default:
      return state;
  }
};

export default characterReducer;
