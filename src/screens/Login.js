import { useNavigation } from "@react-navigation/native";
import React from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { Button, TextField } from "../component";
import { string } from "../localization";

const Login = () => {
    const navigation = useNavigation();

    return (
        <View style={{padding: 20, width: '100%', justifyContent: 'center', flex: 1 }}>
            <Text style={{alignSelf:"center", fontSize: 20, fontWeight:"bold"}}>{string.login.title}</Text>
            <TextField placeholder={string.login.email} />
            <TextField placeholder={string.login.password} />
            <Button title={string.login.button} />
            <View style={{alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 10}}>
                <Text>{string.login.notregister } </Text>
                <Text style={{color: 'blue'}} onPress={() => navigation.navigate('Register')}>{string.login.regmessage}</Text>
            </View>
            
        </View>
    )
}

export default Login;