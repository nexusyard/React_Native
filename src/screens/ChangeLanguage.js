const { View, Text, TouchableOpacity, StyleSheet, Alert } = require("react-native")

import { string } from "../localization";
import { useDispatch } from "react-redux";
import { langChangeHandler } from "../store/colorsSlice";
import DrawerHeader from "../includes/DrawerHeader";
import { CommonActions } from "@react-navigation/native";

const ChangeLanguage = ( {navigation} ) => {
    
    const dispatch = useDispatch();
    const languages = [ 
        { name: string.language.english, code: 'en', title: string.language.english },
        { name: string.language.marathi, code: 'ma', title: string.language.marathi },
        // { name: 'French', code: 'fr', title: 'French'}
    ] 

    const changeLanguageHandler = ({code, title}) => {
        dispatch(langChangeHandler({code: code}));
        // navigation.navigate('Home', { lang: title });
        navigation.dispatch(CommonActions.reset({
            index: 0, routes: [{name: 'ChangeLanguage'}, {name: 'Setting'}]
        }))
        Alert.alert('Language successfully changed.')
    }

    return (
        <View style={{flex: 1}}>
            <DrawerHeader title={string.language.header} />
            <View style={styles.container}>
            {languages.map(( lang, index )=> (
                <TouchableOpacity key={index} style={[styles.button, styles.shadowButtonStyle]} onPress={() => changeLanguageHandler({code: [lang.code], title: [lang.title] })}>
                        <Text style={styles.text}> {lang.title}</Text>
                </TouchableOpacity>
            ))}
            </View>
        </View>
    )
}

export default ChangeLanguage;

const styles = StyleSheet.create({
    container : {
        margin: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    shadowButtonStyle : {
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 0},
        elevation: 2,
    },
    button : {
        backgroundColor: 'orange',
        padding: 12,
        width: '100%',
        borderRadius: 50,
        marginBottom: 20,
        alignItems: "center",
    },
    text : {
        color: '#fff',
        fontSize:16       
    },
    textHover :{
        color: "#000"
    }
})