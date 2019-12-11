import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.maintext}> LoginScreen </Text>
                <TouchableOpacity
                style={styles.button1}
                onPress={()=> this.props.navigation.navigate('')}>
                    <Text style={styles.textbutton1}> Masuk </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button2}
                onPress={()=>this.props.navigation.navigate('Dashboard')}>
                    <Text style={styles.textbutton2}>Skip this</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9b59b6',
  },
  maintext:{
    fontSize: 60
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1abc9c',
    width: 125,
    height: 40,
    borderRadius: 25,
    marginBottom: 20,
  },
  textbutton1: {
    fontSize: 25,
    color: '#FFF',
    alignItems: 'center',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1c40f',
    width: 125,
    height: 45,
    borderRadius: 25,
  },
  textbutton2:{
      fontSize: 25,
      color: 'black',
      alignItems: 'center'
  }
});