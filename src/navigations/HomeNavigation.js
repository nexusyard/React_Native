import React from "react"
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useSelector } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { string } from "../localization";
import { colors } from "../config";

import CustomDrawer from "../includes/CustomDrawer";

import About from "../screens/About";
import TabNavigation from "./TabNavigation";
import ChangeLanguage from "../screens/ChangeLanguage";
import Setting from "../screens/Setting";

const HomeNavigation = () => {

    const Drawer = createDrawerNavigator();
    const {themeColor} = useSelector((state) => state.themeColor);
    const color = colors[themeColor];

    return (
        <Drawer.Navigator 
            drawerContent={(props) => <CustomDrawer {...props} />} 
            screenOptions={ ({route}) =>({
                headerShown: false, 
                drawerActiveTintColor: color.primary, 
                drawerInactiveTintColor: color.surface,
                // drawerContentStyle:{backgroundColor: 'black'}, 
                // drawerContentContainerStyle:{backgroundColor:'black'},
                drawerStyle: { margin:0, backgroundColor: 'red', color: 'green'},
                drawerActiveBackgroundColor: 'orange',
                drawerItemStyle: { width: '100%'},
                
                drawerIcon: ({focused, size, color}) => {
                    let icon;
                    if(route.name === 'Tabs')
                    {
                        icon = focused ? 'home' : 'home-outline'
                    }
                    else if(route.name === 'About')
                    {
                        icon = focused ? 'people' : 'people-outline'
                    }
                    else if(route.name === 'ChangeLanguage')
                    {
                        icon = focused ? 'language' : 'language-outline'
                    }
                    else if(route.name === 'Setting')
                    {
                        icon = focused ? 'settings' : 'settings-outline'
                    }
                    return <Ionicons name={icon} size={size} color={color} />
                },
            })}
            >
            <Drawer.Screen 
                name="Tabs" 
                component={TabNavigation}
                options={{ drawerLabelStyle: { color: 'green', width: 100}, title: string.screens.home, drawerLabel: string.screens.home }} />
            <Drawer.Screen name="About" options={{ title: string.screens.about }} component={About} />
            <Drawer.Screen name="ChangeLanguage" options={{ title: string.screens.language }}  component={ChangeLanguage} />
            <Drawer.Screen name="Setting" options={{ title: string.screens.setting }}  component={Setting} />
        </Drawer.Navigator>
    )
}

export default HomeNavigation;