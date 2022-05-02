import Input from '../components/Input'
import { Button } from '@rneui/themed';
import { useState } from 'react';
import { KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback, ScrollView, View } from 'react-native'
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter } from '../store/actions/character'

const CreateCharScreen = ({ navigation }) => {
    const characters = useSelector(state => state.characters.characters)
    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [about, setAbout] = useState('')
    const [imageLink, setImageLink] = useState('')

    const dispatch = useDispatch();

    const changeTextHandler = (text, func) => {
        func(text)
    };

    const addCharacterHandler = () => {
        dispatch(addCharacter({
            listorder: characters.length + 1,
            name,
            job,
            description: about,
            avatar: imageLink,
        }))
        navigation.navigate('List')
    }

    return (
        <ScrollView >
            <KeyboardAvoidingView style={{ flex: 1, marginBottom: 40 }} behavior={Platform.OS === "android" ? "height" : "padding"}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
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
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default CreateCharScreen