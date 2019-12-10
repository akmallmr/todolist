import React, { Component } from 'react'
import { 
    Text, 
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default class Home extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.maintext}> Homescreen </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}
              style={styles.button}>
              <Text style={styles.textbutton}> Go to Profile </Text>
            </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#706fd3',
  },
  maintext: {
    fontSize: 50,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#ff793f',
    width: 150,
    height: 50,
    borderRadius:15,
    justifyContent:'center'
  },
  textbutton:{
    alignSelf:'center',
    fontSize: 20
  }
});