import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert,TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import styles from '../style/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
  
const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firtsname, setsetFirtsName] = useState('');
  const [lastname, setLastName] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  
  const register = (email,password) =>{
    if(email == "" || password ==""){
        console.log("type email and password");
        alert("type email and password");
      }else{
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            
          console.log('User account created & signed in!');
          navigation.navigate('Login')
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            
          }
    
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
    
          console.error(error);
        });
      }
  };
  return (
    <TouchableWithoutFeedback onPress ={() =>{
        Keyboard.dismiss();
    }}> 
    
        <View>
            <Text style={styles.TextTitleSignUp}>Sign Up </Text>
            <Text style={styles.TextSignUp}>Firts Name</Text>
            <View style={styles.TextInputView}>
                <TextInput
                    style={styles.TextInputSignUp}
                    placeholder="First Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(firtsname) => setsetFirtsName(firtsname)}
                />
            </View>
            <Text style={styles.TextSignUp}>Last Name</Text>
            <View style={styles.TextInputView}>
                <TextInput
                    style={styles.TextInputSignUp}
                    placeholder="Last Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(lastname) => setLastName(lastname)}
                />
            </View>
            <Text style={styles.TextSignUp}>Email Address</Text>
            <View style={styles.TextInputView}>
                <TextInput
                    style={styles.TextInputSignUp}
                    placeholder="Email Address"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                    value={email}
                />
            </View>
            <Text style={styles.TextSignUp}>Password</Text>
            <View style={styles.TextInputView}>
                <TextInput
                    style={styles.TextInputSignUp}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    onChangeText={(password) => setPassword(password)}
                    value={password}
                />
            </View>
            <Text style={styles.TextSignUp}>Confirm Password</Text>
            <View style={styles.TextInputView}>
                <TextInput
                    style={styles.TextInputSignUp}
                    placeholder="ConfirmPassword"
                    placeholderTextColor="#003f5c"
                    onChangeText={(confirmpassword) => setConfirmPassword(confirmpassword)}
                />
            </View>
            
            <TouchableOpacity 
                style={styles.SigUpButton}
                onPress={() => register(email,password)}  
                >
                <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.AlreadyText} >Already register </Text>
                <TouchableOpacity
                    onPress={()=>{
                        navigation.replace('Login');
                    }}
                >
                    <Text style={styles.AlreadyButton}> sign in?</Text>
                </TouchableOpacity>
            </View>


        </View>
    </TouchableWithoutFeedback>
    )
  }
export default SignUp;