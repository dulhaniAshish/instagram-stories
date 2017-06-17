import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../../components/Home'
import data from './data';
import { getStories, storyRead } from '../../../../actions/storiesAction';
import ReactNativeProgressBar from '../../../../shared/ProgressBar';
import {
  StyleSheet,
  View,
} from 'react-native';

class HomeContainer extends Component {

  props: Props

  componentWillMount() {
    // To be called when we got response from server
    this.props.getStories(data.stories);
  }

  openStory(story) {
    console.log('gea;kdjsakds', story)
    this.props.storyRead(story);
  }

  render() {
    return (
      <View style={styles.container}>
        <Home stories={this.props.stories} openStory={(story) => this.openStory(story)} />
        <ReactNativeProgressBar 
          height={2}
          borderWidth={0}
          start={true}
          duration={500}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

const mapStateToProps = (state) => ({
  stories: state.stories.stories,
});

const mapDispatchToProps = (dispatch) => ({
  getStories: stories => dispatch(getStories(stories)),
  storyRead: story => dispatch(storyRead(story))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
