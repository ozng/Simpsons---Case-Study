import { FlatList, View } from 'react-native'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as charActions from '../store/actions/character'
import CharList from '../components/CharList'

const ListScreen = ({ navigation }) => {
    const charData = useSelector(state => state.characters.characters)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(charActions.fetchCharData())
    }, [dispatch])

    const onPressHandler = (item) => {
        navigation.navigate('Detail', {
            character: item
        })
    }

    return (
        <View>
            <FlatList
                data={charData}
                renderItem={({ item, index }) => (
                    <CharList
                        character={item}
                        index={index}
                        onPress={() => onPressHandler(item)}
                    />
                )}
            />
        </View>
    )
}

export default ListScreen