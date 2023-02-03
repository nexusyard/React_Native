import { useState } from "react";
import { View, Text, TextInput } from "react-native";

const MultiSelect = ({data}) => {
    const userData = ['Ashok', 'Raj', 'Guru', 'Shaker'];
    const [onSelect, setOnSelect] = useState(false);
    const [userList, setuserList] = useState(userData);

    const pressHandler = () => {
        console.log('handler: ')
        setOnSelect(prev => !prev);

    }

    const changeHandler = (text) => {
        const filterData = userData.filter(item => item.toLowerCase().includes(text.toLowerCase()));
        console.log('changes: ', filterData);
        setuserList(filterData);
    }

    return (
        <View>
            <Text>Multi Select</Text>
            <TextInput onPressIn={() => pressHandler()} onChangeText={ (text) => changeHandler(text)} placeholder="Text Something" style={{borderWidth: 1, paddingHorizontal: 15}}/>
            { onSelect ? <View style={{ position: 'relative', width: '100%', top: 0, borderWidth: 1, backgroundColor: 'lightgrey' }} > 
                { userList?.map( user => <Text style={{ padding: 10, color: 'black'}}>{ user }</Text>) } 
            </View> : ''}
        </View>
    )
}

export default MultiSelect;