import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import StoriesList from './components/StoriesList'; 

export default class Home extends Component {
  
  render() {

    return (
      <View style={styles.container}>
          <StoriesList {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: (Platform.OS === 'ios' ? 64 : 55),
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
