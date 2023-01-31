const { TextInput, Text, StyleSheet, View } = require("react-native")

export const TextField = ({title, placeholder = 'Enter Details', ...rest}) => {
    return (
        <View style={ styles.inputField }>
            <TextInput style={styles.text} placeholder={placeholder} {...rest} />
        </View>
    )
}

// export default TextField;

const styles = StyleSheet.create({
    inputField: {
        backgroundColor: '#ffffff',
        marginHorizontal: 2,
        borderRadius: 50,
        marginVertical: 5,
    },
    text: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        fontSize: 15,
    }
})