import { useNavigation } from "@react-navigation/native";
import React from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { Button, TextField } from "../component";


const Login = () => {
    const navigation = useNavigation();
    return (
        <View style={{padding: 20, width: '100%', justifyContent: 'center', flex: 1 }}>
            <Text style={{alignSelf:"center", fontSize: 20, fontWeight:"bold"}}>Sign In</Text>
            <TextField placeholder="Email" />
            <TextField placeholder="Password" guru="" />
            <Button title='Login' />
            <View style={{alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 10}}>
                <Text>Not yet register? </Text>
                <Text style={{color: 'blue'}} onPress={() => navigation.navigate('Register')}>Register Here</Text>
            </View>
            
        </View>
    )
}

export default Login;

