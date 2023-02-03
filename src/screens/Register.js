import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, TextField } from "../component";
import { string } from "../localization";


const Register = () => {
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(false);
    return (
        <View style={{padding: 20, width: '100%', justifyContent: 'center', flex: 1 }}>
            <Text style={{alignSelf:"center", fontSize: 20, fontWeight:"bold"}}>{string.register.title}</Text>
            <TextField placeholder={string.register.email} autoCapitalize='none' />
            <TextField placeholder={string.register.password} secureTextEntry={!showPassword ? true : false} />
            <TextField placeholder={string.register.cpassword} secureTextEntry={!showPassword ? true : false} />
            <Button title='Register' />
            <View style={{alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 10}}>
                <Text>{string.register.alreadysign} </Text>
                <Text style={{color: 'blue'}} onPress={() => navigation.navigate('Login')}>{string.register.loginmessage}</Text>
            </View>
            
        </View>
    )
}

export default Register;