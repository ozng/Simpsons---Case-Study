import { fetchChar } from "./helpers/actionHelpers";
import {
  insertCharacter,
  fetchCharDataFromStorage,
  deleteCharacterFromStorage,
  deleteAllCharacters,
} from "../../database/deviceStorage";
import { changeIndex } from "../actions/helpers/actionHelpers";
import CHARACTER from "../../../models/Character";

export const FETCH_DATA = "FETCH_DATA";
export const ADD_CHARACTER = "ADD_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const CHANGE_ORDER = "CHANGE_ORDER";

export const fetchCharData = () => {
  return async (dispatch) => {
    const fetchFromDeviceStorage = await fetchCharDataFromStorage();

    let characters = [];
    if (fetchFromDeviceStorage.rows._array.length < 1) {
      const resData = await fetchChar();
      for (const key in resData) {
        const response = await insertCharacter(
          resData[key].name,
          resData[key].description,
          resData[key].job,
          resData[key].avatar
        );
        characters.push(
          new CHARACTER(
            response.insertId,
            resData[key].name,
            resData[key].description,
            resData[key].job,
            resData[key].avatar
          )
        );
      }
    } else {
      characters = fetchFromDeviceStorage.rows._array;
    }
    dispatch({ type: FETCH_DATA, payload: characters });
  };
};

export const addCharacter = (character) => {
  return async (dispatch) => {
    const addNewCharToDeviceStorage = await insertCharacter(
      character.name,
      character.description,
      character.job,
      character.avatar
    );
    dispatch({
      type: ADD_CHARACTER,
      payload: { id: addNewCharToDeviceStorage.insertId, character },
    });
  };
};

export const deleteCharacter = (id) => {
  return async (dispatch) => {
    deleteCharacterFromStorage(id);
    dispatch({ type: DELETE_CHARACTER, payload: id });
  };
};

export const changeOrderInList = (id, type) => {
  return async (dispatch, getState) => {
    const { characters } = getState().characters;

    const changedOrder = changeIndex(characters, id, type);
    await deleteAllCharacters();
    for (const key in changedOrder) {
      insertCharacter(
        changedOrder[key].name,
        changedOrder[key].description,
        changedOrder[key].job,
        changedOrder[key].avatar
      );
    }

    dispatch({ type: CHANGE_ORDER, payload: changedOrder });
  };
};
