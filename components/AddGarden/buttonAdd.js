import React,{useState} from 'react';
import { Button, View, Text,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../style/styles';
 

export default function buttonAdd({SubmitHandler,inputValue,setInputValue}){
    const changeHandler =(val) =>{
        setInputValue(val);
    }
    return(
        <View style={styles.viewTypetext}>
            <TextInput
                value={inputValue}
                style ={styles.inputtodo}
                placeholder='Create a new garden'
                onChange={e => setInputValue(e.target.inputValue)}
                onChangeText= {changeHandler}
            />
            <TouchableOpacity
                style={styles.buttonAdd}
                onPress={()=>SubmitHandler(inputValue)}    
            >
                <Text>Create</Text>
            </TouchableOpacity>
        </View>
    )
}