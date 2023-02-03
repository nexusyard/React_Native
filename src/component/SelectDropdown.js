import { useState } from 'react';
import {View, Text} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import MultiSelect from 'react-native-multiple-select';

const SelectDropdown = ({Items =[]}) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const selectedHandler = (item) => {
        setSelectedItems(item);
    }
    return (
    <View>
        <Text>Hello</Text>
        <MultiSelect 
            items={Items}
            selectedItems={selectedItems}
            onSelectedItemsChange={() => selectedHandler()} />
        <Text>{selectedItems}</Text>
    </View>
)}

export default SelectDropdown;