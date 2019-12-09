import React, {Component} from 'react'
import {
  Text,
  StyleSheet
} from 'react-native'

export default function Akmal(props){
  return(
  <Text style={styles.font}> I am Akmal</Text>
    );
}
const styles=StyleSheet.create({
  font:{
    color: 'white',
    fontSize: 60
  }
})