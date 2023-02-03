import React from "react";
import { useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../config";
import StackNavigator from './StackNavigator';
import About from "../screens/About";
import Services from "../screens/Services";
import { string } from "../localization";
import PaperForm from "../screens/PaperForm";

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
    // console.log(useColorScheme());
    const {themeColor} = useSelector((state) => state.themeColor);
    const color = colors[themeColor];
    
    return (
        <Tab.Navigator 
            screenOptions={ ({route}) =>({
                headerShown: false,
                tabBarActiveTintColor: color.primary,
                tabBarInactiveTintColor: color.surface,
                tabBarLabelStyle : { fontWeight: 'bold', paddingBottom: 8, paddingTop: 0, fontSize: 13 },
                tabBarStyle: { backgroundColor: color.background, height: 65 },
                tabBarIconStyle: { fontSize: 5, marginTop: 10 },
                tabBarIcon : ({focused, color,size}) => {
                    let icon;
                    if(route.name === 'Home'){
                        icon = focused ? "home" : "home-outline";
                    }
                    else if(route.name === 'About'){
                        icon = focused ? "cube" : "cube-outline";
                    }
                    else if(route.name === 'Services'){
                        icon = focused ? "business" : "business-outline";
                    }
                    else if(route.name === 'Paper'){
                        icon = focused ? "Paper" : "Paper-outline";
                    }
                    // console.log(icon)
                    return <Ionicons name={icon} size={size} color={color} />
            }})} >
            <Tab.Screen 
                name="Home" 
                options={{title: string.screens.home}}
                component={StackNavigator} />
            <Tab.Screen 
                name="About" 
                options={{title: string.screens.about}}
                component={About} />
            <Tab.Screen 
                name="Services" 
                options={{title: string.screens.services}}
                component={Services} />

            <Tab.Screen 
                name="Paper" 
                options={{title: 'Paper Form'}} 
                component={PaperForm} />
        </Tab.Navigator>
    )
}

export default TabNavigation;