import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';
import CreateCharScreen from '../screens/CreateCharScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: 'center'
                }}
            >
                <Stack.Screen
                    name="List"
                    component={ListScreen}
                    options={{ title: 'Simpsons' }}
                />
                <Stack.Screen
                    name="Detail"
                    component={DetailScreen}
                    options={{ title: 'Details' }}
                />
                <Stack.Screen name="Create" component={CreateCharScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator