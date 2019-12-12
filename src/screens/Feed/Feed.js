import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
        style={styles.button2}
        onPress={()=> this.props.navigation.navigate ('Home')}>
          <Text style={styles.textbutton2}> Go to Home </Text>
        </TouchableOpacity>
        <Text style={styles.maintext}> FeedScreen </Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={()=> this.props.navigation.navigate ('Setting')}>
          <Text style={styles.textbutton}> Setting </Text>
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
    backgroundColor: '#33d9b2',
  },
  maintext: {
    fontSize: 50,
    marginBottom: 25,
  },
  button:{
      backgroundColor:'#ffb8b8',
      width:150,
      height:50,
      justifyContent:'center',
      borderRadius: 25
  },
  button2:{
      backgroundColor: 'black',
      width: 75,
      height: 25,
      justifyContent:'center',
      borderRadius: 15
  },
   textbutton2:{
      color: 'white',
      fontSize: 10,
      alignSelf: 'center',
   },
  textbutton:{
      fontSize: 25,
      alignSelf: 'center',
      
  }
});

export default Feed