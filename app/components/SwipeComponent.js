import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class SwipeComponent extends Component {
  render() {
    const resizeMode = this.props.resizeMode
    return (
      <View
        style={{
        flex: 1,
      }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        }}
        >
          <Image
            style={{
              flex: 1,
              resizeMode
          }}
            source={{ uri: this.props.item.remote }}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color:'#F5FCFF'
            }}
          >
            {this.props.item.text}
          </Text>
        </View>
      </View>
    );
  }
}