const { View, Text, TouchableOpacity } = require("react-native");
import Ionicons from 'react-native-vector-icons/Ionicons';

const CheckBox = ({checked = true, checkboxHandler, title},props) => {
    return (
        <View>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={checkboxHandler}>
                <View style={[{margin: 5, width: 24, height: 24, borderWidth: 2, borderColor: '#000', alignItems: "center", justifyContent: "center", borderRadius: 3}, props.style]} > 
                    {checked ? <Ionicons name="checkmark" style={{fontWeight: 'bold', fontSize:20}} /> : null}
                </View>
                <Text style={{ color: checked  ? 'skyblue' : 'grey', fontSize: 14, marginLeft: 5 }}>{ title }</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CheckBox;