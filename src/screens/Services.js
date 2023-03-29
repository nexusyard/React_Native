import Header from "../includes/Header";
import { string } from "../localization";
import { colors } from "../config";
import { useDispatch, useSelector } from "react-redux";
import RenderHtml from "../component/RenderHtml";

const { View, Text } = require("react-native")

const Services = () => {
    const themeColordata = useSelector((state) => state.themeColor).themeColor;
    const color = colors[themeColordata];

    return (
        <View style={{flex: 1, backgroundColor: color.background}} >
            <Header title={string.service.header} />
            <View style={{ margin: 10,}}>
                <View style={{ width: '100%', color: color.surface }} >
                    <Text>{ string.service.name }</Text>
                </View>
                <RenderHtml />
            </View>
        </View>
    )
}

export default Services;