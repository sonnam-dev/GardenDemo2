import React, {useEffect, useState} from 'react';
import {View, Text,Button,TouchableOpacity,ScrollView,Alert,TouchableWithoutFeedback,Keyboard,TextInput, FlatList, } from 'react-native';
import styles from '../style/styles' ;
import AddGarden, { submidUser } from './AddGarden';
import AreaTakecare from './AreaTakecare';
import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app';
import { Item } from 'native-base';

  
const GardenScreen = ({navigation}) =>{
    
    const [Id,setId] = React.useState();
    const [Name,setName] = React.useState('');

    let curenUser = "";
    curenUser = firebase.auth().currentUser.email.split('@')[0];

    const CreateGarder = () => {
       
        if(Name == ""){
            // alert("Type some thing...");
            console.log("-------");
        }else{
            submidUser(Id,Name,curenUser)
            .then(result => {
                setId(null);
                setName('');
            }).catch(error => {
                console.log("error :" ,error);
            });
        }
    }
    
    const[data,setData] = useState([]);
    
    useEffect (() =>{
        const getData = async () => {
            await database().ref('/'+ curenUser).on('value',snapshot => {
                // console.log("Data RDB: ", snapshot.val();
                let arr = [];
                snapshot.forEach(element => {
                    let temp  = {
                        name: element.val().Name,
                        id : element.key,
                        
                    }
                    arr.push(temp);
                });
                setData(arr);
            });
            
        }
        getData();
        
    }, []);
    

    const ViewItem = (props) => (
        <View>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('AreaTakecare');
                }}>
                
                <View style={styles.viewGarden}>
                    <Text style={{fontSize: 20,color:'white'}}>{props.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
    
    return(
        <View style={{flex:1,backgroundColor:'#DEB887'}}>
              
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
                <ScrollView>
                    <FlatList
                        data={data}
                        renderItem={({item}) => ViewItem(item)}
                        
                    />
                </ScrollView> 
        </View>
        )
    }
export default GardenScreen;    