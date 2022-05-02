import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons';

const CharList = ({ character, index, onPress, deleteItem, onPressUp, onPressDown }) => {
    return (
        <View style={styles.container}>
            <View style={{ ...styles.row, ...styles.wrapper }}>
                <TouchableOpacity activeOpacity={0.65} onPress={onPress}>
                    <View style={{ ...styles.row, ...styles.avatarAndNameCont }}>
                        <View style={{ ...styles.row, ...styles.avatarContainer }}>
                            <Text>{index + 1}</Text>
                            <Image resizeMode='contain' source={{ uri: character.avatar }} style={styles.avatar} />
                        </View>
                        <View style={styles.nameCont}>
                            <Text numberOfLines={1} lineBreakMode='tail'>{character.name}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ ...styles.row }}>
                    <Feather
                        name="arrow-up-circle"
                        size={24}
                        color="green"
                        onPress={onPressUp}
                        style={styles.icon}
                    />
                    <Feather
                        name="arrow-down-circle"
                        size={24}
                        color="red"
                        onPress={onPressDown}
                        style={styles.icon}
                    />
                    <MaterialIcons
                        name="delete-outline"
                        size={24}
                        color="black"
                        onPress={deleteItem}
                    />
                </View>
            </View>
            <View style={styles.divider} />
        </View>
    )
}

export default CharList

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    container: {
        backgroundColor: 'white',
    },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    avatarAndNameCont: {
        alignItems: 'center',
    },
    avatarContainer: {
        alignItems: 'center'
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 25
    },
    divider: {
        height: 0.8,
        flex: 1,
        backgroundColor: 'lightgrey'
    },
    icon: {
        marginRight: 5
    }
})