import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import TestCarousel from '../components/TestCarousel'

export default class ScreenOne extends Component {
  render() {
    return (
      <TestCarousel />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});