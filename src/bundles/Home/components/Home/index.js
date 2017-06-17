import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import StoriesList from './components/StoriesList'; 

export default class Home extends Component {
  
  render() {

    const {
      stories
    } = this.props

    return (
      <View style={styles.container}>
          <StoriesList stories={stories} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
