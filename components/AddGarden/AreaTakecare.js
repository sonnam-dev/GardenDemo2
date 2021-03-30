import React,{useState} from 'react';
import { Button, View, Text,TouchableOpacity,ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../style/styles';
 

export default function AreaTakecare(){
    
    return(
        <ScrollView> 
            <View style={{flex: 1,backgroundColor: 'black'}}>
                <View style={styles.viewTypetext2} >
                    <Text style={{textAlign:'center',color:'white',fontSize:20}}>Area 1 </Text>
                    <Text style={{color:'white'}}>Huminity :                                                   30%  </Text>
                    <Text style={{color:'white'}}>Temperature :                                            20°</Text>
                    <Text style={{color:'white'}}>Symptom Of Disease:                              <Text style={{color:'red'}}>Yes</Text></Text>
                </View>
                <View style={styles.viewTypetext2} >
                    <Text style={{textAlign:'center',color:'white',fontSize:20}}>Area 2</Text>
                    <Text style={{color:'white'}}>Huminity :                                                   31%  </Text>
                    <Text style={{color:'white'}}>Temperature :                                            23°</Text>
                    <Text style={{color:'white'}}>Symptom Of Disease:                              <Text style={{color:'red'}}>Yes</Text></Text>
                </View>
                <View style={styles.viewTypetext2} >
                    <Text style={{textAlign:'center',color:'white',fontSize:20}}>Area 3</Text>
                    <Text style={{color:'white'}}>Huminity :                                                   28%  </Text>
                    <Text style={{color:'white'}}>Temperature :                                            26°</Text>
                    <Text style={{color:'white'}}>Symptom Of Disease:                              <Text style={{color:'red'}}>No</Text></Text>
                </View>
                <View style={styles.viewTypetext2} >
                    <Text style={{fontSize:40, color:'white',textAlign:'center',alignContent:'center',marginTop:20}}>+</Text>
                </View>
            </View>
        </ScrollView>
    )
}
