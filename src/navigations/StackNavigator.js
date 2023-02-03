import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import About from "../screens/About";
import ChangeLanguage from "../screens/ChangeLanguage";
import Services from "../screens/Services";
import Setting from "../screens/Setting";
import CustomDrawer from "../includes/CustomDrawer";

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}} >
            <Stack.Screen name="HomePage" component={Home} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Services" component={Services} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="ChangeLanguage" component={ChangeLanguage} />
            <Stack.Screen name='CustomDrawer' component={CustomDrawer} />
        </Stack.Navigator>
    )
}

export default StackNavigator;