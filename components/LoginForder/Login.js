import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert,TouchableOpacity } from 'react-native';
import firebase from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import styles from '../style/styles';
const Login = ({navigation}) => {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (email,password) =>{
      auth()
      .signInWithEmailAndPassword(email,password)
      .then(() => {
        console.log('User signed in anonymously');
        navigation.navigate('Main')
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }

        console.error(error);
      });
  }

    return (

      <View style={styles.container}>
      {/* <Image style={styles.image} source={require("./assets/log2.png")} /> */}
        {/* <Image
          style={styles.Logo}
          source={require('D:/code/Garden-Manager-Mobile-App/logo-social-sq.png')}
        /> */}
        
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#5A6764"
            onChangeText={(email) => setEmail(email)}
            value={email}
          />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#5A6764"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            value={password}
          />
        </View>
  
        <TouchableOpacity
          onPress={()=>{
            navigation.navigate('ForgotPass');
          }}
        >
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={() => login(email,password)}
        
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.forgot_button}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      
        
      </View>
    )
  }

export default Login;