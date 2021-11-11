import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import Quiz from '../pages/quiz';
import Results from '../pages/results';

const Navigation = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen options={{ headerBackTitle: '', headerShown: true }} name="Quiz" component={Quiz}></Stack.Screen>
                <Stack.Screen name="Results" component={Results}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation