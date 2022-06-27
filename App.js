import React, { Component } from 'react';
import { StyleSheet, View,Text } from 'react-native';
export default class HeightWidth extends Component {
  render() {
  return (
  <View style={styles.container}>
    <Text> here is the container</Text>
  <View style={styles.powderblue} ><Text> this is my powder</Text></View>
  <View style={styles.skyblue} ><Text style={{color:'#00f'}}>this is my sky</Text></View>
  <View style={styles.steelblue} >
    <Text style={{color:'#fff'}}>this is my steel</Text>
  </View>
  <Text > ending the container</Text>
  </View>
  );
  }
  }
  const styles = StyleSheet.create({
    container:{
    flex:1
    },
    powderblue:{
    flex:1,
    backgroundColor: 'powderblue',
    },
    skyblue:{
    flex:2,
    backgroundColor: 'skyblue',
    },
    steelblue:{
    flex:3,
    backgroundColor: 'steelblue',
    
    },
    })