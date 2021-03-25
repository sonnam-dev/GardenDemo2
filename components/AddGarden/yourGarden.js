
import React, {useState} from 'react';
import {View, Text,Button,TouchableOpacity,ScrollView,Alert,TouchableWithoutFeedback,Keyboard  } from 'react-native';
import styles from '../style/styles' ;
import Header from './Header';
import AddGarden from './AddGarden';
import ButtonAdd from './ButtonAdd';



const GardenScreen = ({navigation}) =>{
    const [todos,setTodos] = useState([
            {Humidity:'', Temperature:''},            
          ]);
          const [inputValue, setInputValue] = useState("");
          const PressHandler=(key)=>{
            setTodos((prevTodos ) => {
              return prevTodos.filter(todo => todo.key != key);
            });
          }
          const SubmitHandler = (text) =>{
            if(text ==="") {
              Alert.alert("Error!","Please type Something",[
                {text:"Understood"}
              ]);
              return};
            setTodos((prevTodos) => {
              return [
                ...prevTodos,
                {text: text, key: Date.now().toString()}
        
              ]
            });
            setInputValue("");
          }
          return(
            <ScrollView>
                <TouchableWithoutFeedback onPress ={() =>{
                    Keyboard.dismiss();
                }}>
                <View style={styles.containers}>
                    <Header />
                    <View style={styles.content}>
                        <View style={styles.list}>
                            
                            {todos.map((todo,index) => (
                            <AddGarden 
                                todo={todo}
                                PressHandler={PressHandler}
                                index={index}
                            />
                            ))}
                        </View>
                    </View>
                    <ButtonAdd SubmitHandler={SubmitHandler}
                                inputValue={inputValue}
                                setInputValue={setInputValue}
                        />
                </View>
                </TouchableWithoutFeedback>
            </ScrollView>
          )
        }
export default GardenScreen;    