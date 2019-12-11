import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.maintext}> ProfileScreen </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Feed')}>
          <Text style={styles.textbutton}> Go to Feed </Text>
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
    backgroundColor: '#ffda79',
  },
  maintext: {
    fontSize: 50,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#7efff5',
    width: 150,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
  },
  textbutton: {
    fontSize: 25,
    alignSelf: 'center',
  },
});
