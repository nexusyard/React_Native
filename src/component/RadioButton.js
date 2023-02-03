const { View, Text, TouchableOpacity } = require("react-native");

const RadioButton = ({selected = false, onPressEvent, title}, props) => {
    console.log(title)
    return (
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={onPressEvent}>
                <View style={[{margin: 5, width: 24, height: 24, borderWidth: 2, borderColor: '#000', alignItems: "center", justifyContent: "center", borderRadius: 12}, props.style]} > 
                    {selected ? <View style={{backgroundColor: '#000', width: 12, height: 12, borderRadius: 6}} />: null}
                </View>
                <Text style={{ color: selected  ? 'skyblue' : 'grey', fontSize: 14, marginLeft: 5 }}>{ title }</Text>
            </TouchableOpacity>
        
    )
}

export default RadioButton;