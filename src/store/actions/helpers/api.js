import axios from "axios"

export const fetchChar = async () => {
    const { data } = await axios.get('https://5fc9346b2af77700165ae514.mockapi.io/simpsons')

    return data;
}