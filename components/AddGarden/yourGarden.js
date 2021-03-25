
import React, {useState} from 'react';
import {View, Text,Button,TouchableOpacity,ScrollView,Alert,TouchableWithoutFeedback,Keyboard,TextInput  } from 'react-native';
import styles from '../style/styles' ;
import Header from './Header';
import AddGarden from './AddGarden';
import ButtonAdd from './ButtonAdd';



const GardenScreen = ({navigation}) =>{
    
    const [Id,setId] = React.useState();
    const [Name,setName] = React.useState('');
    const [User,setUser] = React.useState([]);

    const CreateGarder = () => {
        alert(Name);
    }

    return(
        <ScrollView>
            <TouchableWithoutFeedback onPress ={() =>{
                Keyboard.dismiss();
            }}>
            <View style={styles.viewTypetext}>
            <TextInput
                value={Name}
                style ={styles.inputtodo}
                placeholder='Create a new garden'
                onChangeText= {(text) => setName(text)}
            />
            <TouchableOpacity
                style={styles.buttonAdd}
                onPress={ CreateGarder}    
            >
                <Text>Create</Text>
            </TouchableOpacity>
        </View>
            </TouchableWithoutFeedback>
        </ScrollView>
        )
    }
export default GardenScreen;    