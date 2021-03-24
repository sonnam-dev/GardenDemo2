import React from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';


    export default function Header(){
        return(
            <View style={styles.header}>
                <Text style={styles.title}>Your Garden</Text>
            </View>
        )
    }
    const styles = StyleSheet.create({
        header: {
            height:60,
            paddingTop:20,
            backgroundColor:'coral',
        },
        title:{
            textAlign:'center',
            color:'#fff',
            fontSize:20,
            fontWeight:'bold',
        }
    });