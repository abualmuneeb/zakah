import React, { Component } from 'react';
import {View, Button } from 'react-native';



export default class Button1 extends Component {

onPressLearnMore(){
    alert('test');
}

  render() {
    return (
     <View>
         <Button
            onPress={this.onPressLearnMore}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
     </View>
    );
  }
}

