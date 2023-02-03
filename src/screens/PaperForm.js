import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { RadioButton, TextInput, Checkbox, Text, Divider, Switch, ToggleButton, FAB, SegmentedButtons, Searchbar, Button, Snackbar, Avatar, Card, Banner, List, Modal, } from 'react-native-paper';

const PaperForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <ScrollView>

        <SafeAreaView style={{ }}>
            <Text style={{color: 'red'}}>
                Hello Paper
            </Text>
            {/* <Banner>
                Generate and resizr your adaptive app icon. Especially create Android Adaptive Icon online.
            </Banner> */}
            <View style={{ alignItems : "center", justifyContent: 'center' }} >
                <TextInput style={{width: '95%'}} placeholder="Enter Name" /> 
                <TextInput style={{width: '95%'}} placeholder="enter mail" autoCapitalize="false" mode="outlined" label='Email' />
                <Divider />
                <RadioButton value="male" status="checked"/>
                <RadioButton value="male" status="unchecked"/>
                <Text>Select it.</Text> 
                <RadioButton.Item label="Item check" value="Item" status="checked"  />
                <Checkbox value={1} />
                <Text>
                    Check it.
                </Text>
                <Checkbox.Item label="Item Check" value="item" status="checked" />
                <Divider style={{width: '95%'}} />
                <Text>Select</Text>
                <Switch value="true" />
                <ToggleButton.Row  value="value">
                    <ToggleButton icon='format-align-right' value="right" />
                    <ToggleButton icon='format-align-left' value="left" />
                </ToggleButton.Row>
                <View style={{ marginHorizontal: 10, alignItems: "center" }}>
                    <FAB icon='plus' mode="elevated" size="medium"  loading={ isLoading ? true : false } onPress={ () => setIsLoading(prev => !prev)} style={{alignSelf: 'flex-end', margin: 10}} />
                    <SegmentedButtons buttons={[ {value: 'first', label: 'First'}, {value: 'second', label: 'Second'}, {value: 'third', label: 'Third'},]}  />
                    <Searchbar placeholder="Search" />
                    {/* <Button icon='camera' >Capture</Button> */}
                </View>
                {/* <Snackbar visible={visible}> Hey I am snack bar.</Snackbar> */}
                <Avatar.Icon icon='people' size={50} />
                <Avatar.Text label="MERN" size={50} />
                <Card>
                    <Card.Title>
                        <Text style={{color: 'orange'}}>    
                            Easy Icon
                        </Text>
                    </Card.Title>
                    <Card.Cover source={require('../assets/images/profile_background.jpg')}></Card.Cover>
                    <Card.Content> 
                        <Text>
                                Generate and resize your adaptive app icon. Especially create Android Adaptive Icon online. Contact Us
                        </Text> 
                    </Card.Content>
                    <Card.Actions > 
                        <Button>Ok</Button> 
                        <Button>Cancel</Button>
                    </Card.Actions>
                </Card>
            </View>
            <Text>Welcome</Text>
            <Divider style={{ width: "95%"}} />
            <Text>Welcome</Text>
            <List.Accordion title='uncontrolled'>
                <List.Item title="First" /> 
                <List.Item title="second" />
            </List.Accordion>

            <Modal>
                <Text>Beach main hay..</Text>
            </Modal>
        </SafeAreaView>
        </ScrollView>
    )
}

export default PaperForm;