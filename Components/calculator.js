import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      expresion:""
    }
  }

  getExp = (data)=>{
    if (data === "C"){
      this.setState({expresion:""})
    }
    else if (data === "CE"){
      this.setState({expresion:this.state.expresion.substr(0,this.state.expresion.length-1)})
    }
    else if (data === "="){
      this.getOp()
    }
    else if (data==="+" || data==="-"){
      if (this.state.expresion[this.state.expresion.length-1] === "+" || this.state.expresion[this.state.expresion.length-1] === "-"){
        this.setState({expresion:this.state.expresion.substr(0,this.state.expresion.length-1)+data})
      }else{
        this.setState({expresion:this.state.expresion+data})  
      }
    }
    else{
      this.setState({expresion:this.state.expresion+data})
    }
  }

  getOp = ()=>{
    this.setState({expresion:eval(this.state.expresion)})
  }

  render (){  
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.textStyle} >{this.state.expresion}</Text>
        <Text>
        {"\n"}
        <Button title="1" onPress={this.getExp.bind(this,1)} />{"  "}
        <Button title="2" onPress={this.getExp.bind(this,2)} />{"  "}
        <Button title="3" onPress={this.getExp.bind(this,3)} />{"  "}
        <Button title="+" onPress={this.getExp.bind(this,"+")} />{"  "}
        {"\n"}
        </Text>
        <Text>
        <Button title="4" onPress={this.getExp.bind(this,4)} />{"  "}
        <Button title="5" onPress={this.getExp.bind(this,5)} />{"  "}
        <Button title="6" onPress={this.getExp.bind(this,6)} />{"  "}
        <Button title="-" onPress={this.getExp.bind(this,"-")} />{"  "}
        {"\n"}
        </Text>
        <Text>
        <Button title="7" onPress={this.getExp.bind(this,7)} />{"  "}
        <Button title="8" onPress={this.getExp.bind(this,8)} />{"  "}
        <Button title="9" onPress={this.getExp.bind(this,9)} />{"  "}
        <Button title="%" onPress={this.getExp.bind(this,"%")} />{"  "}
        {"\n"}
        </Text>
        <Text>
        <Button title="C" onPress={this.getExp.bind(this,"C")} />{"  "}
        <Button title="0" onPress={this.getExp.bind(this,0)} />{"  "}
        <Button title="CE" onPress={this.getExp.bind(this,"CE")} />{"  "}
        <Button title="=" onPress={this.getExp.bind(this,"=")} />{"  "}
        {"\n"}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
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
