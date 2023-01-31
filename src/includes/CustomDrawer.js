import { View, Text, Image, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, Switch, Linking } from "react-native";
import { DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import versionInfo from 'react-native-version-info';

import { CommonActions, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors } from "../config";
import { string } from "../localization";
import { themeColorHandler } from "../store/colorsSlice";

import Profile from '../assets/images/profile.jpg';
import ProfileBack from '../assets/images/profile_background.jpg';

const color = colors['dark'];

const CustomDrawer = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const {themeColor} = useSelector((state) => state.themeColor);
    const color = colors[themeColor];
    const routes = props.state.routes;
    
    const changeTheme = () => {    
        dispatch(themeColorHandler());
        navigation.navigate('Home')
    }

    // let labelName = Object.keys(string.screens).filter( name => name.toLowerCase() == routes[1].name.toLowerCase() ).toString();
    // console.log(routes[0].name, 'lable', string.screens[labelName])

    return (
        <View style={styles.sidebarContainer}>
            <DrawerContentScrollView 
                {...props} 
                contentContainerStyle={{backgroundColor: color.background }}>
                <ImageBackground 
                    resizeMode="cover" 
                    blurRadius={10} style={{width: '100%', height: 150, opacity: 0.9}} 
                    source={ProfileBack} >
                
                <View style={{margin: 10, shadowColor: 'blue', padding:2, shadowOffset: 5, elevation: 5, shadowOpacity: 0.5}}>
                    <Switch value={themeColor === 'light' ? false : true}  onValueChange={() => changeTheme()} />
                </View>
                <View style={styles.profileContent } >
                    <Image style={styles.profile} source={ Profile } />
                    
                    <Text style={{color: '#fff'}}>Guest User</Text>
                    <Text style={{color: '#fff'}}>Admin</Text>
                </View>
                </ImageBackground>
                <DrawerItemList {...props} />
                {/* <DrawerItem label={string.screens.setting} onPress= { () => navigation.navigate('Setting')} activeTintColor={color.surface} inactiveTintColor={color.surface} /> */}
                <DrawerItem 
                    icon={({color, size, focused}) => (
                        <Ionicons name={ focused ? 'md-help-circle' : 'md-help-circle-outline'} color={color} size={size} />
                    )} 
                    label={string.screens.help} 
                    onPress={() => Linking.openURL('https://reactnavigation.org/docs/drawer-navigator')}  />
            </DrawerContentScrollView>
            <View style={styles.footer}>
                <Text style={styles.footer_text}> {string.drawer.versionText} {  versionInfo.appVersion}</Text>
            </View>
        </View>
    )
}
export default CustomDrawer;

const styles = StyleSheet.create({
    sidebarContainer: {
        flex: 1,
        width: '100%',
    },
    profileCover : {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    profileContent: {
        flex: 1,
        alignItems:"center",
        position: 'absolute',
        left: 10,
        bottom: 10
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    menuCard: {
        width: '100%',
        marginTop: 5,
        justifyContent: 'flex-start'
    },
    menu: {
        width:'100%',
        padding: 0,
        margin: 0,
        paddingHorizontal: 250,
        // flexDirection: 'row',
        backgroundColor: color.background
    },
    icon: {
        color: color.surface,
        marginRight: 10,
        fontSize: 20
    },
    menuname : {
        fontSize: 18,
        color: color.surface,
    },
    footer : {
        margin: 10,
        alignItems: "center",
        borderTopColor: 'black',
        borderTopWidth: 1,
    },
    footer_text: {
        padding: 5,
        fontSize: 12,
    }
    
});