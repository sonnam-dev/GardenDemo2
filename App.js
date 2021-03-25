import React, { useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from './components/LoginForder/SignUp';
import Login from './components/LoginForder/Login';
import Main from './components/LoginForder/main';    
import yourGarden from './components/AddGarden/yourGarden';


import database, { firebase } from '@react-native-firebase/database';

const reference = database().ref('/users/123456');
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={Main} />

        <Stack.Screen name="yourGarden" component={yourGarden} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// function writeUserData(email, fname, lname) {
//   database()
//   .ref('/sonnam/123')
//   .update({
//     age: 32,
//   })
//   .then(() => console.log('Data updated.'));

//   firebase.database().ref('Users/').set({
//     email,
//     fname,
//     lname
//   }).then((data) => {
//     console.log('data', data);
//   }).catch((error) => {
//     console.log('error', error);
//   });
// }
//  export default writeUserData;