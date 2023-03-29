const { View, Text, ScrollView } = require("react-native")
import RenderHTML from "react-native-render-html";

const htmlSource = {
    html: ` <div> 
<h1 style='text-align: center'>Our Services</h1>
<pre> 
1. Step 1: Start.
2. Step 2: Enter first number.
4. Step 3: Enter second number
5. Step 4: Add First and second number and store in result.
3. Step 3: Print result ( 10 + 10 = 20 )
9. Step 9: End.
</pre>
<p> Code: </p>
<pre style='color: blue;'> 
void main(){
    int a =10;
    int b = 20;
    int c = a + b = 30;
    print("%d",c);
}
</pre>
</div>`
}

const RenderHtml = () => {
    return (
        <ScrollView>
            <View>
                <Text>Render</Text>
                <RenderHTML source={htmlSource} contentWidth={200} />
            </View>
        </ScrollView>
    )
}

export default RenderHtml;