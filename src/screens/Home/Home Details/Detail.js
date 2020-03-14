import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'

export default class Detail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.maintext}> Home detail Screen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    maintext:{
        fontSize: 35,
        color: 'green',
        alignSelf:'center'

    }
})