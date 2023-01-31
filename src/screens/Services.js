import Header from "../includes/Header";
import { string } from "../localization";
import { colors } from "../config";
import { useDispatch, useSelector } from "react-redux";

const { View, Text } = require("react-native")

const Services = () => {
    const themeColordata = useSelector((state) => state.themeColor).themeColor;
    const color = colors[themeColordata];

    return (
        <View style={{flex: 1, backgroundColor: color.background}} >
            <Header title={string.service.header} />
            <View style={{padding: 10, width: '100%', flex: 1, color: color.surface }} >
                <Text>{string.service.name}</Text>
            </View>
        </View>
    )
}

export default Services;