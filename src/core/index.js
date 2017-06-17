
import React from 'react'
import { Router } from 'react-native-router-flux'
import { Provider } from 'react-redux'
import InstagramStoriesRouter from './router'

const Kernel = (): React$Element<any> => {
  return (
    <Provider>
      <InstagramStoriesRouter />
    </Provider>
  )
}

export default Kernel
