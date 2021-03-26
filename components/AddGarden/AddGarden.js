import React from 'react';
import { Button, View, Text,StyleSheet,TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database';

export function AddGarden({todo,PressHandler,index}){
   
    if(todo.text != "")
    {
        return(

            <View style={styles.item}>
                <TouchableOpacity 
                    style={styles.SigUpButton}
                    onPress={ () => alert("hello")}>
                        <Text style={{alignItems:'flex-start'}}>{index + 1}. {todo.text} </Text>
                </TouchableOpacity >
                <TouchableOpacity 
                    style={styles.DeleteButton}
                    onPress={ () => PressHandler(todo.key )}>
                    <Text> x </Text>
                </TouchableOpacity>
                
            </View>
        
        )
    }
};

export  const submidUser = (Id,Name) =>{
    return new Promise(function(resolve, reject) {
        let key;
        if(Id != null){
            key =Id;
        }else{
            key = database().ref().push().key;
        }

        let dataToSave = {
            Id : key,
            Name: Name,
        };
        database()
            .ref('Users/' +  key)
            .update(dataToSave).
            then(snapshot => { resolve(snapshot);
            })
            .catch(err => {reject(err);
        });

    });
};

const styles = StyleSheet.create({
    item: {
      flex:1,
      marginTop: 5,
      borderColor: "#ffafa2",
      borderWidth: 1,
      borderRadius: 1,
      flexDirection:'row',
      backgroundColor:'#49dd8c'
    },
    SigUpButton:{
        flex:8, 
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7,
        alignItems:'center',
        justifyContent:'center',
        fontSize:19,
        height:45,
      },
     DeleteButton:{
        flex:1,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7,
        alignItems:'center',
        justifyContent:'center',
        fontSize:19,
      },


  });