import React, {useEffect} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ForgotPassword from "../screens/ForgotPassword";
import ChangePassword from "../screens/ChangePassword";
import {string} from '../localization';
import { useSelector } from "react-redux";

const AuthNavigator = () => {

    const Stack = createNativeStackNavigator();
    const {language} = useSelector(state => state.themeColor);
    useEffect( () => {
        string.setLanguage(language);
    },[language])
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login" >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </Stack.Navigator>
    )
}

export default AuthNavigator;