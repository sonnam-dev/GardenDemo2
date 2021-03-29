
import React, {Component} from 'react';
import {View, Text,StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Statement: {
        
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 250,
    },
    container: {
      flex: 1,
      backgroundColor: "#13A987",
      alignItems: "center",
      justifyContent: "center",
    },
    LoginText:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textForm:{
        // flex:1,
        fontSize:19,
        marginLeft: -23,
        
        
    },
    appButtonContainer: {
        // elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 20,
        paddingVertical: 10,
        // paddingHorizontal: 12,
        marginLeft:65,
        marginRight:65,
        marginTop:20,
      },
      appButtonText: {
        fontSize: 15,
        color: "black",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      forgot_button: {
        height: 30,
        marginBottom: 30,
        color:"#F3F9F8",
      },
      inputView: {
        backgroundColor: "#F3F9F8",
        borderRadius: 30,
        width: "65%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
      },
      loginBtn: {
        width:"30%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:5,
        backgroundColor:"#6AEFD1",
      },
      TextSignUp:{
        fontWeight:'bold',
        marginLeft: 50,
        marginBottom:10,
      },
      TextTitleSignUp:{
        fontWeight:'bold',
        fontSize: 20,
        marginBottom:20,
        marginLeft:170,
        alignContent:"center",  
        justifyContent:"center",
        
      },
      TextInputSignUp:{
        height: 50,
        flex: 1,
        marginLeft: 0,
      },
      TextInputView:{
        backgroundColor: "#eaece7",
        borderRadius: 0,
        width: "80%",
        height: 40,
        marginBottom: 10,
        marginLeft: 50,
      },
      SigUpButton:{
        width:"80%",
        height:40,
        alignItems:"center",
        justifyContent:"center",
        marginTop:15,
        marginLeft: 50,
        backgroundColor:"#32a9cb",
      },
      AlreadyText:{
        // flex:1,
        marginLeft:220,
        marginTop:5,
        
      },
      AlreadyButton:{
        // flex:1,
        // marginTop:10,
        color: 'blue',
      },
      Logo:{
        width:90,
        height:90,
        marginBottom:50,
      },
      TextDemo:{
        alignContent:"center",  
        justifyContent:"center",
        textAlign:'center',
        // marginBottom: -50%,
      },
      ContinuesButton:{
        width:"30%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:5,
        backgroundColor:"#6AEFD1",
      },
      inputViewFGPW:{
        backgroundColor: "#F3F9F8",
        borderRadius: 30,
        width: "65%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        marginLeft:60,
      },
      ContinuesButton:{
        width:"30%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:5,
        backgroundColor:"#6AEFD1",
        marginLeft:150,
      },
      titleFGPW:{
        fontSize:25,
        fontWeight:'bold',
        marginLeft: 90,
        marginBottom:20,
        
      },
      TextSuccessRSPW:{
        textAlign:'center',
        marginTop:250,
      },
      GobackLogin:{
        height: 30,
        marginBottom: 30,
        color:"#F3F9F8",
        marginLeft:180,
        color:'#191970'
      },
      inputtext:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:"#ddd",
        marginLeft:55,
      },
      containers: {
        flex: 1,
        backgroundColor: '#fff',
      },
      content: {
        padding: 10,
      },
      list: {
        marginTop: 20,
      },

      TypeText:{
        
      },
      viewTypetext:{
        padding: 16,
        marginTop: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 1,
        flexDirection:'row',
        backgroundColor:'#a2ffff'
      },
      buttonAdd:{
        flex:2,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7,
        alignItems:'center',
        justifyContent:'center',
        fontSize:19,
      },
      inputtodo:{
        flex:7,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7,
        marginLeft:5,
        marginRight:5,
        fontSize:19,
      },
      
      viewGarden:{
        width:"80%",
        height:40,
        alignItems:"center",
        justifyContent:"center",
        marginTop:15,
        marginLeft: 50,
        backgroundColor:"pink",
      },
      textLoad:{
        fontSize:28,
        color: 'white',

      }





})
export default styles;