import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

import Item from './Item'

class StoriesList extends Component {

  constructor (props) {
    super(props)

    this.ds = new ListView.DataSource({rowHasChanged: (f1, f2) => f1.id !== f2.id})
    this.state = {
      dataSource: this.ds.cloneWithRows(props.stories)
    }
  }


  componentWillReceiveProps (nextProps) {
    this.setState({
      dataSource: this.ds.cloneWithRows(nextProps.stories)
    })
  }


  render() {

    const {
      open,
      ...props,
    } = this.props


    return (
      <View style={{ height: 40, flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          contentContainerStyle={styles.container}
          enableEmptySections={true}
          renderRow={story => (
            <Item story={story} open={open} style={styles.item} />
          )}
          {...props}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'stretch'
  },
  item: {
    marginRight: 3
  },
})

export default StoriesList;
