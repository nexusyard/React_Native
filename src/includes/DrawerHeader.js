const { View, Text, StyleSheet, useColorScheme, TouchableOpacity } = require("react-native")
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../config';
import { useSelector } from 'react-redux';

const DrawerHeader = ({title, children}) => {
    
    const navigation = useNavigation();
    const {themeColor} = useSelector((state) => state.themeColor);
    const color = colors[themeColor];
    
    return (
        <View style={ [styles.conatiner, {backgroundColor: color.background}] }>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icons}>
                <Ionicons  name="arrow-back" style={{fontSize: 20, color: color.surface }}  />
            </TouchableOpacity>
            <Text style={[styles.text, { color: color.surface }]} >{title}</Text>
        </View>
    )
}

export default DrawerHeader;

const styles = StyleSheet.create({
    conatiner: {
        
        flexDirection: 'row', 
        alignItems: 'center', 
        shadowColor: 'grey', 
        elevation: 3, 
        justifyContent: 'flex-start', 
        width: '100%',
    },

    icons : {
        marginRight: 10,
        padding: 10,
    },
    text: {
        fontSize: 20
    }
})