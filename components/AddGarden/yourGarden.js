
import React, {useState} from 'react';
import {View, Text,Button,TouchableOpacity,ScrollView,Alert,TouchableWithoutFeedback,Keyboard,TextInput, FlatList, } from 'react-native';
import styles from '../style/styles' ;
import AddGarden, { submidUser } from './AddGarden';
import ButtonAdd from './ButtonAdd';
import database from '@react-native-firebase/database';
import { Item } from 'native-base';

  
const GardenScreen = ({navigation}) =>{
    
    const [Id,setId] = React.useState();
    const [Name,setName] = React.useState('');
    const [User,setUser] = React.useState([]);

    const CreateGarder = () => {
        submidUser(Id,Name)
        .then(result => {
            setId(null);
            setName('');
        }).catch(error => {
            console.log(error);
        });
    }
    React.useEffect(() => {
        const userRef = database().ref('/User');
        const OnLoadingListener = userRef.on('value',snapshot =>{
            setUser([]);
            snapshot.forEach(function(childSnapshot){
                setUser(User => [...User,childSnapshot.val()]);

            });


        });
        return() =>{
            userRef.off('value',OnLoadingListener);
        };
    })
    // const data = User.map(item,index);
    const data =[ User.map((item,index) => {
        id =  item.Id,
        name = item.Name
    },)];
    return(
        <View>
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
            <FlatList
                data={data}
                renderItem={({ item }) => <Item name={item.name} />}
                keyExtractor={item => item.id}
            />
            
            

        </View>
        )
    }
export default GardenScreen;    