import { fetchChar, changeIndex } from './actionHelpers'

test('Fetch character information from API', () => {
    expect(fetchChar()).toBeInstanceOf(Promise);
})

const testArray = [
    {
        id: 1,
        name: "Homer"
    },
    {
        id: 2,
        name: "Marge"
    }
]

const expectedArray = [
    {
        id: 2,
        name: "Marge"
    },
    {
        id: 1,
        name: "Homer"
    }
]

test('Changing index of the specific character', () => {
    expect(changeIndex(testArray, 1, "up")).toEqual(expect.arrayContaining(expectedArray));
})