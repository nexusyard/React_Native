import React, { useEffect, useState } from "react";
import { StatusBar, View, Text, Button, Switch, useColorScheme, Appearance} from "react-native";
import { string } from "../localization";
import { colors } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { themeColorHandler } from "../store/colorsSlice";

import Header from "../includes/Header";

const Home = ({ navigation, route }) => {
    const dispatch = useDispatch();
    
    const {themeColor} = useSelector((state) => state.themeColor);
    const color = colors[themeColor];

    const changeTheme = () => {    
        dispatch(themeColorHandler());
    }

    return (
        <View style={{flex: 1, backgroundColor: color.background}} >
            <Header title={string.home.header} />

        <View style={{padding: 10, width: '100%', flex: 1, color: color.surface }} >
            <Text style={{color: color.surface }}>
                <Text>
                New Change Theme: {useColorScheme()}
                </Text>
                <Switch value={themeColor === 'light' ? false : true} onValueChange={() => changeTheme()} />
                <Text style={{color: 'blue'}} onPress={() => changeTheme('dark')}>Dark </Text> 
                <Text style={{color: 'red'}} onPress={() => changeTheme('light')}>Light</Text>
            </Text>
            
            <Text>{route.params?.lang}</Text>
            
            <Text>{ string.about.title }</Text>
            <Text>{ string.service.title }</Text>
            <Text>{ string.profile.title }</Text>
            
            <StatusBar barStyle={themeColor === 'dark' ? 'light-content' : 'dark-content' } />
        </View>
        </View>
    )
}

export default Home;