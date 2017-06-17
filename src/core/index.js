
import React from 'react'
import { Router } from 'react-native-router-flux'
import { Provider } from 'react-redux'
import InstagramStoriesRouter from './router'
import store from '../store'

const Kernel = (): React$Element<any> => {
  return (
    <Provider store={store}>
      <InstagramStoriesRouter />
    </Provider>
  )
}

export default Kernel
