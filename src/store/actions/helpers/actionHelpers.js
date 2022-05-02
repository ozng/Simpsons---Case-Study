import axios from "axios"

export const fetchChar = async () => {
    const { data } = await axios.get('https://5fc9346b2af77700165ae514.mockapi.io/simpsons')

    return data;
}

export const changeIndex = (array, id, type) => {
    let arr = array

    const fromIndex = arr.findIndex(c => c.id === id);
    const toIndex = type === "up" ? fromIndex - 1 : fromIndex + 1

    if (toIndex > arr.length || toIndex < 0) {
        return arr
    }

    const element = arr.splice(fromIndex, 1)[0];

    arr.splice(toIndex, 0, element);

    return arr
}