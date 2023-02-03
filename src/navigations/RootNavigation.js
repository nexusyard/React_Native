import { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { string } from "../localization";

import AuthNavigator from "./AuthNavigation";
import HomeNavigation from "./HomeNavigation";

const RootNavigation = () => {
    const Stack = createNativeStackNavigator();
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const {language} = useSelector((state) => state.themeColor);
    console.log(language);

    useEffect( () => {
        string.setLanguage(language);
    },[language])
    
    return (
        <NavigationContainer>
            { isLoggedIn ? <HomeNavigation /> : <AuthNavigator /> }
        </NavigationContainer>
    )
}

export default RootNavigation;