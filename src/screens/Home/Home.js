import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.maintext}> Homescreen </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Edit')}
          style={styles.button}>
          <Text style={styles.textbutton}> Go to Edit </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Detail')}
          style={styles.button}>
          <Text style={styles.textbutton}> Home Detail </Text>
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
    borderRadius: 15,
    justifyContent: 'center',
    marginBottom: 10
  },
  textbutton: {
    alignSelf: 'center',
    fontSize: 20,
  },
});

export default Home;
