const { View, Text, StyleSheet, useColorScheme, TouchableOpacity } = require("react-native")
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../config';
import { useSelector } from 'react-redux';

const Header = ({title, children}) => {
    
    const navigation = useNavigation();
    const themeColordata = useSelector((state) => state.themeColor).themeColor;
    const color = colors[themeColordata];
    
    return (
        <View style={ [styles.conatiner, {backgroundColor: color.background}] }>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.icons}>
                <Ionicons  name="menu" style={{fontSize: 20, color: color.surface }}  />
            </TouchableOpacity>
            <Text style={[styles.text, { color: color.surface }]} >{title}</Text>
        </View>
    )
}

export default Header;

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