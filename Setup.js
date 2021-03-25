import React, { useEffect } from 'react';
import App from './App';
import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';



export {firebase,Auth};

function SetUp() {
  return <App />;
}

export default SetUp;