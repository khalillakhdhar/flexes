import React, { Component } from 'react';
import { StyleSheet, View,Text } from 'react-native';
export default class HeightWidth extends Component {
  render() {
  return (
  <View style={styles.container}>
    <Text> here is the container</Text>
  <View style={styles.powderblue} />
  <View style={styles.skyblue} />
  <View style={styles.steelblue} />
  <Text> ending the container</Text>
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