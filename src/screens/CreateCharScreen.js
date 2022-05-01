import Input from '../components/Input'
import { Button } from '@rneui/themed';
import { useState } from 'react';
import { KeyboardAvoidingView, Keyboard, View, Platform, TouchableOpacity } from 'react-native'
import { useHeaderHeight } from '@react-navigation/elements';
// Redux
import { useDispatch } from 'react-redux';
import { addCharacter } from '../store/actions/character'

const CreateCharScreen = ({ navigation }) => {
    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [about, setAbout] = useState('')
    const [imageLink, setImageLink] = useState('')

    const headerHeight = useHeaderHeight();

    const dispatch = useDispatch();

    const changeTextHandler = (text, func) => {
        func(text)
    };

    const addCharacterHandler = () => {
        dispatch(addCharacter({
            name,
            job,
            description: about,
            avatar: imageLink
        }))
        navigation.navigate('List')
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={headerHeight} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()}>
                <Input
                    label="Name Surname:"
                    value={name}
                    onChangeText={(text) => changeTextHandler(text, setName)}
                />
                <Input
                    label="Job Title:"
                    value={job}
                    onChangeText={(text) => changeTextHandler(text, setJob)}

                />
                <Input
                    label="About Him/Her:"
                    inputStyle={{ height: 100, textAlignVertical: 'top' }}
                    multiline
                    value={about}
                    onChangeText={(text) => changeTextHandler(text, setAbout)}

                />
                <Input
                    label="Image Link:"
                    value={imageLink}
                    onChangeText={(text) => changeTextHandler(text, setImageLink)}

                />
                <Button
                    title="Add Character"
                    containerStyle={{ margin: 10 }}
                    disabled={!name || !job || !about || !imageLink}
                    onPress={addCharacterHandler}
                />
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default CreateCharScreen