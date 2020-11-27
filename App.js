import React, { useDebugValue, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function App(){
    const [getPrice, setPrice] = useState('');
    const [getDiscount, setDiscount] = useState('');

    const [getDiscountValue, setDiscountValue] = useState('');
    const [getSaveAmount, setSaveAmount] = useState('');

    const calculate = ()=>{
        const actual = Number(getPrice)
        const discount = Number(getDiscount)
        const discountValue = (actual - (actual*(discount/100))).toFixed(2);
        const save = (actual - discountValue).toFixed(2)
        setDiscountValue(String(discountValue))
        setSaveAmount(String(save))
    }

    const checkDiscount = (data)=>{
        const check = Number(data)
        if (check<0 || check>100){
            alert('Invalid Discount Check Again Applied')
            setDiscount('')
        } else {
            setDiscount(data)
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Discount Calculator</Text>
            <View style={styles.inputTextContainer}>
                <View style={styles.inputTextStyles}>
                    <Text>Orignal Price: </Text>
                    <TextInput keyboardType='decimal-pad' value={getPrice} onChangeText={(data)=>setPrice(data)} placeholder = 'Enter Actual Price' />
                </View>
                <View style={styles.inputTextStyles}>
                    <Text>Discount Avaliable: </Text>
                    <TextInput keyboardType='decimal-pad' value={getDiscount} onChangeText={(data)=>checkDiscount(data)} placeholder = 'Enter Discount' />
                </View>
            </View>
            <View style={styles.buttonStyle}>
                <Button title='Calculate' color='grey' onPress={()=>calculate()}/>
            </View>
            <View style={styles.inputTextContainer}>
                <View style={styles.inputTextStyles}>
                    <Text>Discounted Value: </Text>
                    <TextInput style={styles.textStyle} editable={false} value={getDiscountValue} placeholder = 'Discounted Price' />
                </View>
                <View style={styles.inputTextStyles}>
                    <Text>You Save: </Text>
                    <TextInput style={styles.textStyle} editable={false} value={getSaveAmount} placeholder = 'You Save' />
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
    header:{
        fontSize: 36,
        margin: '5%',
    },
    textStyle:{
      color:'black'
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