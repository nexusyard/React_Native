import React from "react"
import { I18nManager} from 'react-native';
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
import InputFields from "../screens/InputFields";

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
                // drawerStyle: { backgroundColor: 'red', color: 'green', width: "80%"},
                drawerItemStyle: { paddingHorizontal: 5, borderRadius: 0, width: '100%', margin: 0, marginTop: 0, marginLeft:0 },
                drawerActiveBackgroundColor: 'orange',
                
                drawerIcon: ({focused, size, color}) => {
                    let icon;
                    if(route.name === 'Home')
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
                    else if(route.name === 'Forms')
                    {
                        icon = focused ? 'newspaper' : 'newspaper-outline'
                    }
                    return <Ionicons name={icon} size={size} color={color} />
                },
            })}
            >
            <Drawer.Screen 
                name="Home" 
                component={TabNavigation}
                options={{ drawerLabelStyle: { color: 'green', width: 100}, title: string.screens.home, drawerLabel: string.screens.home }} />
            <Drawer.Screen name="About" options={{ title: string.screens.about }} component={About} />
            <Drawer.Screen name="ChangeLanguage" options={{ title: string.screens.language }}  component={ChangeLanguage} />
            <Drawer.Screen name="Setting" options={{ title: string.screens.setting }}  component={Setting} />
            <Drawer.Screen name="Forms" options={{title: 'Forms'}} component={InputFields} />
        </Drawer.Navigator>
    )
}

export default HomeNavigation;