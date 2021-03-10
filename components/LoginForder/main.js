import React, {Component} from 'react';
import { StyleSheet, Platform, Image, Text, View, Button,TouchableOpacity } from 'react-native';
import styles from '../style/styles';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const Main = ({navigation}) => {
 
  const SignOut = () => {
      auth()
      .signOut()
      .then(() => console.log("SignOut"));    
      navigation.navigate('Login')
  }
  return (
    <View>
            <View style={styles.Statement}>
                {/* <Image /> */}
                <Text style = {styles.textForm}>SOLUTION FOR YOUR OWN GARDEN</Text>
            </View>
            <View >
                <View>
                    <TouchableOpacity 
                        onPress= {()=>{
                            navigation.navigate('');
                        }} 
                        style={styles.appButtonContainer}>
                        <Text style={styles.appButtonText}>YOUR GARDEN MANAGER</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={(event)=>alert('hi')} style={styles.appButtonContainer}>
                        <Text style={styles.appButtonText}>CONFIGURATION</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={(event)=>alert('hi')} style={styles.appButtonContainer}>
                        <Text style={styles.appButtonText}>SETTING</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={SignOut}>
                        <Text style={styles.appButtonText}>Sign out!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
  )
  }

export default Main;