import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../../components/Home'
import data from './data';
import { getStories } from '../../../../actions/storiesAction';

class HomeContainer extends Component {

  props: Props

  componentWillMount() {
    // To be called when we got response from server
    this.props.getStories(data.stories);
  }

  openStory(story) {
    console.log('gea;kdjsakds', story)
  }

  render() {
    return (
      <Home stories={this.props.stories} openStory={(story) => this.openStory(story)} />
    )
  }

}


const mapStateToProps = (state) => ({
  stories: state.stories.stories,
});

const mapDispatchToProps = (dispatch) => ({
  getStories: stories => dispatch(getStories(stories))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
