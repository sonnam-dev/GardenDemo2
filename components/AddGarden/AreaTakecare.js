import React,{useState} from 'react';
import { Button, View, Text,TouchableOpacity,ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../style/styles';
import AddGarden from './AddGarden';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
export default function AreaTakecare(name){

    const [huminity1,setHuminity1] = React.useState();
    const [temperature1,setTemperature1] = React.useState('');
    const [symptomOfDisease1,setSymptomOfDisease1] = React.useState('');
    const [huminity2,setHuminity2] = React.useState();
    const [temperature2,setTemperature2] = React.useState('');
    const [symptomOfDisease2,setSymptomOfDisease2] = React.useState('');
    const [huminity3,setHuminity3] = React.useState();
    const [temperature3,setTemperature3] = React.useState('');
    const [symptomOfDisease3,setSymptomOfDisease3] = React.useState('');

    function huminityRandom1(){
        var number = Math.floor(Math.random()*10)+24;
        setHuminity1(number);
    }
    function temperatureRandom1(){
        var number = Math.floor(Math.random()*12)+15;
        setTemperature1(number);
    }
    function symptomOfDiseaseRandom1(){
        var number = Math.floor(Math.random()*2)+0;
        if(number == 1){
            setSymptomOfDisease1('Yes');
        }else{
            setSymptomOfDisease1('No');
        }
    }
    function huminityRandom2(){
        var number = Math.floor(Math.random()*10)+24;
        setHuminity2(number);
    }
    function temperatureRandom2(){
        var number = Math.floor(Math.random()*12)+15;
        setTemperature2(number);
    }
    function symptomOfDiseaseRandom2(){
        var number = Math.floor(Math.random()*2)+0;
        if(number == 1){
            setSymptomOfDisease2('Yes');
        }else{
            setSymptomOfDisease2('No');
        }
    }
    function huminityRandom3(){
        var number = Math.floor(Math.random()*10)+24;
        setHuminity3(number);
    }
    function temperatureRandom3(){
        var number = Math.floor(Math.random()*12)+15;
        setTemperature3(number);
    }
    function symptomOfDiseaseRandom3(){
        var number = Math.floor(Math.random()*2)+0;
        if(number == 1){
            setSymptomOfDisease3('Yes');
        }else{
            setSymptomOfDisease3('No');
        }
    }
    const username = firebase().currentUser.email.split('@')[0];
    const usersCollection = firestore().collection(username);
    const AddUser =() =>{
        console.log("adduser");
        usersCollection.doc('hello').set({
            name: 'son nam',
            position: 'computer scient'
        });
    };

    
    return(
        <ScrollView> 
            <View style={{flex: 1,backgroundColor: 'black'}}>
                <TouchableOpacity
                onPress={()=>{
                    huminityRandom1();
                    temperatureRandom1();
                    symptomOfDiseaseRandom1();
                }}>
                    <View style={styles.viewTypetext2} >
                        <Text style={{textAlign:'center',color:'white',fontSize:20}}>Area 1 </Text>
                        <Text style={{color:'white'}}>Huminity :                                                   {huminity1}%  </Text>
                        <Text style={{color:'white'}}>Temperature :                                            {temperature1}°</Text>
                        <Text style={{color:'white'}}>Symptom Of Disease:                              <Text style={{color:'red'}}>{symptomOfDisease1}</Text></Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => { AddUser() }}>
                    <View style={styles.viewTypetext2} >
                        <Text style={{fontSize:40, color:'white',textAlign:'center',alignContent:'center',marginTop:20}}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
