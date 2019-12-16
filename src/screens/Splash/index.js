import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

class Splash extends Component {
    constructor () {
        super();
            this.state = {
                animating: false,
                align: 'center',
                alignsecond: false,
            };
            setTimeout(
                () => 
                    this.setState({align:'flex-start'}, function(){
                        this.setState({
                            alignsecond: true,
                        });
                    }),
                3000
            );
    }

render(){
    return(
        <View style={styles.container}>
            <Image
                source={{uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',}}
                style={{width: 80, height: 80}}/>

                {!this.state.alignsecond ? null : (
                    <View style={{margin: 10}}>
                        <Text style={styles.maintext}>
                            Welcome to React Native!
                        </Text>
                    </View>
                )}
        </View>
    )
}

}
export default Splash;