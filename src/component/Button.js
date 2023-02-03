const { TouchableOpacity, Text, StyleSheet } = require("react-native")

export function Button ({title, children, ...rest}) {
    return (
        <TouchableOpacity style={styles.button} {...rest} >
            <Text style={styles.text}>{title?.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FF5D5D',
        fontSize: 20,
        padding: 10,
        marginHorizontal: 2,
        marginVertical: 5,
        textAlign: "center",
        borderRadius: 20,
        shadowColor: '#ffffff',
        shadowOffset: 20,
        shadowRadius: 10,
        shadowOpacity: 0.5,
        shadowRadius: 20,
    },

    text: {
        color: "#ffffff",
        fontSize: 16,
        alignSelf: "center",
        
    }

})