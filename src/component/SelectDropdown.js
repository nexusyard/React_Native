import { useState } from 'react';
import {View, Text} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import RadioButtonRN from 'radio-buttons-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [{label: 'Data 1'}, {label: 'Data 2'} ];

const SelectDropdown = ({Items =[]}) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [radioSelected, setRadioSelected] = useState(false);

    const selectedHandler = (item) => {
        setSelectedItems(item);
    }

    console.log(selectedItems);
    return (
    <View>
        <Text>Hello</Text>
        <MultiSelect 
            items={Items}
            selectedItems={selectedItems}
            onSelectedItemsChange={() => selectedHandler()} />
        {/* <Text>{selectedItems}</Text> */}
        <Text>Radio/Checkbox</Text>
        <RadioButtonRN 
            data={ data } 
            selectedBtn={ (e) => console.log(e) }
            // icon={ <Ionicons name='help-circle-sharp' /> } 
        />
        
    </View>
)}

export default SelectDropdown;