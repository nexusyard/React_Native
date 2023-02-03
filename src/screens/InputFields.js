1
import { useState } from "react";
import CheckBox from "../component/CheckBox";
import RadioButton from "../component/RadioButton";
const { View, Text, TextInput, Switch, FlatList, SectionList, ScrollView } = require("react-native")
import { Button } from "../component";
import MultiSelect from "../component/MultiSelect";
import SelectDropdown from "../component/SelectDropdown";

const InputFields = () => {
    const [selected, setSelected] = useState(false);
    const [checked, setChecked] = useState(false);
    const [gender, setGender] = useState('male');
    const [readyOrNot, setreadyOrNot] = useState('No');

    const cityData = [{city: 'Mumabi', code: 'MU'}, 
                        {city: 'Nashik', code: 'NA'}, 
                        {city: 'Delhi', code: 'DE'},
                        {city: 'Goa', code: 'GO'}, 
                        {city: 'Kolkata', code: 'Ko'},
                        {city: 'Jaipur', code: 'JA'}, 
                        {city: 'Pune', code: 'PU'}
                    ];

    const sectionData = [   {title: "Section A", data: ['Pune', 'Mumabi', 'Nagpur', 'Nashik']}, 
                        {title: "Section B", data: ['Delhi', 'Bihar', 'MP', 'UP']}, 
                        {title: "Section C", data: ['Kerala', 'Chennai', 'Kolkata', 'Banlgore']}, 
                    ];

    const Items = [ {
        id: '92iijs7yta',
        name: 'Ondo'
      }, {
        id: 'a0s0a8ssbsd',
        name: 'Ogun'
      }, {
        id: '16hbajsabsd',
        name: 'Calabar'
      }, {
        id: 'nahs75a5sg',
        name: 'Lagos'
      }, {
        id: '667atsas',
        name: 'Maiduguri'
      }, {
        id: 'hsyasajs',
        name: 'Anambra'
      }, {
        id: 'djsjudksjd',
        name: 'Benue'
      }, {
        id: 'sdhyaysdj',
        name: 'Kaduna'
      }, {
        id: 'suudydjsjd',
        name: 'Abuja'
    } ]
    
    const radioHandler = ()=>{
        setSelected(prev => !prev);
        gender === 'Male' ? setGender('Female') : setGender('Male');
    }

    const checkboxHandler =()=>{
        setChecked(prev => !prev);
        readyOrNot === 'Yes' ? setreadyOrNot('No') : setreadyOrNot('Yes');
    }

    return (
        <ScrollView>
            <View style={{padding: 10 }}>
                <Text> --- All Input Fields ---</Text>
                {/* <TextInput placeholder="Enter your name." /> */}
                {/* <Switch value="Enable me" id="1" />  */}
                <RadioButton value={gender} selected={selected} onPressEvent={radioHandler} title='Male' /> 
                <CheckBox checked={checked} checkboxHandler={checkboxHandler} title='I m intrested.' />
                <MultiSelect />
                <Button title='Submit' />
                <Text style={{alignItems: "center", alignSelf: "center"}}>
                    {gender} {readyOrNot}
                </Text>
                <Text>Flat List</Text>
                <FlatList data={cityData} renderItem={({item}) => <Text style={{ borderBottomWidth: 1, padding : 5 }}>{ item.city }</Text> } />
                <Text>Section List</Text>
                <SectionList 
                    sections={ sectionData } 
                    renderItem={ ({item}) => <Text style={{ paddingHorizontal: 5, paddingVertical: 2 }}> {item}</Text> }
                    renderSectionHeader={({section}) => <Text style={{ padding: 5, backgroundColor: 'lightgrey'}}> {section.title} </Text>} />
            <SelectDropdown Items={Items} />
            </View>
        </ScrollView>
    )
}
export default InputFields;