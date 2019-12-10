import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'

export default class Setting extends Component {
    render() {
        return (
            <View style={styles.container}>
            <TouchableOpacity 
            style={styles.button}
            onPress={()=> this.props.navigation.navigate ('Home')}>
                <Text style={styles.buttontext}> Go Back to Home </Text>
            </TouchableOpacity>
                <Text style={styles.maintext}> Setting Screen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#32ff7e',
  },
  maintext: {
    fontSize: 50,
    alignSelf: 'center',
  },
  button:{
      backgroundColor:'black',
      width: 100,
      height: 35,
      justifyContent:'center',
      borderRadius: 25
  },
  buttontext:{
      color: 'white',
      fontSize: 10,
      alignSelf: 'center',
  }
});