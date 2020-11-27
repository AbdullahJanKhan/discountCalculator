import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function App(){

    return(
        <View style={styles.container}>
            <View style={styles.inputTextContainer}>
                <View style={styles.inputTextStyles}>
                    <TextInput keyboardType='decimal-pad' placeholder = 'Enter Actual Price' />
                </View>
                <View style={styles.inputTextStyles}>
                    <TextInput keyboardType='decimal-pad' placeholder = 'Enter Discount' />
                </View>
            </View>
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
    inputTextContainer:{
      flexDirection: 'row',
    },
    inputTextStyles:{
        width:'48%',
        borderWidth: 2,
        borderColor: 'grey',
        padding: 5,
        margin: 5,
    },
    buttonStyle:{
        width: '50%',
        padding: '5%'
    }
  });