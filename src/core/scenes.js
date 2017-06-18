import React from 'React'
import {Actions, Scene} from 'react-native-router-flux'
import HomeScene from '../bundles/Home'

export default Actions.create(
  <Scene key="root">
    <Scene key="HomeScene" component={HomeScene} title="Stories"/>
  </Scene>
)
