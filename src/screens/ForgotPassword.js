import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>ForgotPassword</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login') } > 
                <Text>return to Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ForgotPassword;