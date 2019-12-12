import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Edit extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.maintext}> Edit Homescreen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  maintext: {
    fontSize: 35,
    color: 'red',
    alignSelf: 'center',
  },
});

export default Edit;