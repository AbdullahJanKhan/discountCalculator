import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App(){

    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>Hello World!!</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle:{
      fontSize: 21
    },
    Button:{
      padding:10
    }
  });