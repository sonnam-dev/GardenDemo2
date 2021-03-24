import React, { useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from './components/LoginForder/SignUp';
import Login from './components/LoginForder/Login';
import Main from './components/LoginForder/main';
import database from '@react-native-firebase/database';

const reference = database().ref('/users/123456');
// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator >
//         <Stack.Screen name="SignUp" component={SignUp} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Main" component={Main} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
function User({ userId }) {
  useEffect(() => {
    const onValueChange = database()
      .ref('/users/${userId}')
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
      });

    // Stop listening for updates when no longer required
  //   return () =>
  //     database()
  //       .ref('/users/${userId}')
  //       .off('value', onValueChange);
  }, [userId]);
}
 export default User;