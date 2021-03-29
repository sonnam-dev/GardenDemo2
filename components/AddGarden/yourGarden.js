import React, {useEffect, useState} from 'react';
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
    const { useState } = React;

    
    const CreateGarder = () => {
        if(Name == ""){
            // alert("Type some thing...");
            console.log("-------");
        }else{
            submidUser(Id,Name)
            .then(result => {
                setId(null);
                setName('');
            }).catch(error => {
                console.log("loi :" ,error);
            });
        }
    }

    const[data,setData] = useState([]);
    
    useEffect (() =>{
        const getData = async () => {
            await database().ref("/Users").on('value',snapshot => {
                console.log("Data RDB: ", snapshot.val());
                let arr = [];
                snapshot.forEach(element => {
                    let temp  = {
                        id : element.key,
                        name: element.val().Name,
                    }
                    arr.push(temp);
                });
                
                console.log("arr load app :" , arr);
                setData(arr);
                console.log("log data    : ",data);
                
            });
            
            
        }
       
        getData();
        console.log("const loadData :  ",getData().arr);
        
        
    }, []);
    
    const Item = ({title}) =>(
        <View style={styles.item}>
            <Text style={styles.viewGarden}>{title}</Text>
        </View>
    )
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    
    const ViewItem = (props) => (
        <View style={styles.viewGarden}>
            <View>
                <Text style={{fontSize: 28,color:'#eaece7'}}>{props.Name}</Text>
            </View>

        </View>
    )

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
                renderItem={renderItem}
                
            />

        </View>
        )
    }
export default GardenScreen;    