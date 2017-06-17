import React, { Component } from 'react'
import { Router } from 'react-native-router-flux'
import scenes from './scenes'

export default class InstagramStoriesRouter extends Component{

  render(){
    return (
      <Router scenes={scenes} />
    )
  }
}
