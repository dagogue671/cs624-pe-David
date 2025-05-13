import React, { Component } from 'react'
import { Image, StyleSheet, View, Text, ScrollView, TouchableHighlight } from 'react-native'
import ProfileCard from './ProfileCard'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScaled: false,
        }

        this.toggleScale = this.toggleScale.bind(this)
    }

    toggleScale() {
        this.setState(prevState => ({
            isScaled: !prevState.isScaled,
        }))
    }
    
    render(){

        var scaleValue = this.state.isScaled ? 1 : 0.5;

        return (
              <ScrollView style={{backgroundColor: 'white'}}>
                    <TouchableHighlight
                        onPress={this.toggleScale}
                        style={{
                            transform: [{scale: scaleValue}]
                        }}
                    >
                        <View>
                            <ProfileCard />
                        </View>
                    </TouchableHighlight>
               </ScrollView>
        )
    }
}

