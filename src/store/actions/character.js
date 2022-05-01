import { fetchChar } from './helpers/actionHelpers'
import { insertCharacter, fetchCharDataFromStorage, deleteCharacterFromStorage, } from '../../database/deviceStorage'

export const FETCH_DATA = "FETCH_DATA"
export const ADD_CHARACTER = "ADD_CHARACTER"
export const DELETE_CHARACTER = "DELETE_CHARACTER"
export const CHANGE_ORDER = "CHANGE_ORDER"

export const fetchCharData = () => {
    return async dispatch => {
        const fetchFromDeviceStorage = await fetchCharDataFromStorage()
        let characters = []
        if (fetchFromDeviceStorage.rows._array.length < 1) {
            const resData = await fetchChar();
            for (const key in resData) {
                insertCharacter(
                    resData[key].name,
                    resData[key].description,
                    resData[key].job,
                    resData[key].avatar,
                )
            }
            characters = resData
        } else {
            characters = fetchFromDeviceStorage.rows._array
        }
        dispatch({ type: FETCH_DATA, payload: characters })
    }
}

export const addCharacter = character => {
    return async dispatch => {
        const addNewCharToDeviceStorage = await insertCharacter(
            character.name,
            character.description,
            character.job,
            character.avatar
        )
        dispatch({ type: ADD_CHARACTER, payload: { id: addNewCharToDeviceStorage.insertId, character } })
    }
}

export const deleteCharacter = id => {
    return async dispatch => {
        deleteCharacterFromStorage(id)
        dispatch({ type: DELETE_CHARACTER, payload: id })
    }
}

export const changeOrderInList = (id, type) => {
    return async dispatch => {
        dispatch({ type: CHANGE_ORDER, payload: { id, type } })
    }
}