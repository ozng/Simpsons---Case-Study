import { fetchChar } from './helpers/api'

export const FETCH_DATA = "FETCH_DATA"
export const ADD_CHARACTER = "ADD_CHARACTER"


export const fetchCharData = () => {
    return async dispatch => {
        const resData = await fetchChar();
        dispatch({ type: FETCH_DATA, payload: resData })
    }
}