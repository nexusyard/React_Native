import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChangePassword = () => {
    const navigation = useNavigation();
    
    return (
        <View>
            <Text>ChangePassword</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login') } > 
                <Text>Return to Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChangePassword;