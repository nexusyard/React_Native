import React, { useEffect, useState } from "react";
import { StatusBar, View, Text, Button, useColorScheme } from "react-native";
import { string } from "../localization";
import { colors } from "../config";
import { useDispatch, useSelector } from "react-redux";


import Header from "../includes/Header";

const About = ({navigation, route}) => {
    
    // const color = colors[useColorScheme()];

    const themeColordata = useSelector((state) => state.themeColor).themeColor;
    const color = colors[themeColordata];

    // console.log('header: ',color, themeColordata);

    return (
        <View style={{flex: 1, backgroundColor: color.background}}>
            <Header title={string.about.header} />
            <View style={{padding: 10, width: '100%', flex: 1, color: color.surface }}>
            <Text>{route.params?.lang}</Text>

            <Text>{ string.about.title }</Text>
            <Text>{ string.service.title }</Text>
            <Text>{ string.profile.title }</Text> 
            </View>
        </View>
    )
}


export default About;