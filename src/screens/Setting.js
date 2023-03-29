import DrawerHeader from "../includes/DrawerHeader";
import { useSelector } from "react-redux";
import { string } from "../localization";
import { colors } from "../config";
import { View, Text } from"react-native";

const Setting = () => {

    const themeColordata = useSelector((state) => state.themeColor).themeColor;
    const color = colors[themeColordata];

    return (
        <View >
            <DrawerHeader title={string.setting.header} />
            {/* <Header /> */}
            <Text> --- Setting ---</Text>
        </View>
    )
}
export default Setting;