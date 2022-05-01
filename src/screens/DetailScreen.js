import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import React from 'react'

const DetailScreen = ({ route }) => {
    const characterData = route.params.character

    return (
        <ScrollView>
            <Image resizeMode='contain' source={{ uri: characterData.avatar }} style={styles.image} />
            <Text style={{ ...styles.name, ...styles.centeredText }}>{characterData.name}</Text>
            <Text style={{ ...styles.job, ...styles.centeredText }}>{characterData.job}</Text>
            <Text style={styles.desc}>{characterData.description}</Text>
        </ScrollView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    image: {
        marginVertical: 10,
        height: 300,
    },
    name: {
        fontSize: 24
    },
    job: {
        fontSize: 18,
        color: 'grey'
    },
    desc: {
        padding: 10,
        color: 'grey'
    },
    centeredText: {
        textAlign: 'center'
    }
})