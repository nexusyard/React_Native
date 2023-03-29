import { useState, useEffect } from "react";

import { DarkTheme,  DefautlTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { string } from "../localization";

import AuthNavigator from "./AuthNavigation";
import HomeNavigation from "./HomeNavigation";
import { useColorScheme } from "react-native";

const RootNavigation = () => {
    const Stack = createNativeStackNavigator();
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const {language} = useSelector((state) => state.themeColor);
    console.log(language);

    const scheme = useColorScheme('dark');
    useEffect( () => {
        string.setLanguage(language);
    },[language])
    
    return (
        <NavigationContainer theme={ scheme === 'dark' ? DarkTheme : DefautlTheme }>
            { isLoggedIn ? <HomeNavigation /> : <AuthNavigator /> }
        </NavigationContainer>
    )
}

export default RootNavigation;