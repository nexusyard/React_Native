import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, TextField } from "../component";


const Register = () => {
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(false);
    return (
        <View style={{padding: 20, width: '100%', justifyContent: 'center', flex: 1 }}>
            <Text style={{alignSelf:"center", fontSize: 20, fontWeight:"bold"}}>Sign Up</Text>
            <TextField placeholder="Email" autoCapitalize='none' />
            <TextField placeholder="Password" secureTextEntry={!showPassword ? true : false} />
            <TextField placeholder="Confirm Password" secureTextEntry={!showPassword ? true : false} />
            <Button title='Register' />
            <View style={{alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 10}}>
                <Text>Already have account? </Text>
                <Text style={{color: 'blue'}} onPress={() => navigation.navigate('Login')}>Login</Text>
            </View>
            
        </View>
    )
}

export default Register;