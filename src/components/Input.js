import { StyleSheet, TextInput, View, Text } from 'react-native'

const Input = ({ containerStyle, inputStyle, label, ...props }) => {
    return (
        <View style={{ ...styles.container, ...containerStyle }}>
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput
                {...props}
                style={{ ...styles.input, ...inputStyle }}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        marginVertical: 10,
    },
    input: {
        borderColor: 'lightgrey',
        borderWidth: 0.5,
        borderRadius: 4,
        padding: 5,
        backgroundColor: 'white'
    },
    label: {
        marginBottom: 3,
        fontSize: 12
    }
})