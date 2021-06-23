import React from 'react'
import { Text } from 'react-native'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { BlogProvider } from './src/context/BlogContext'
import reducer from './src/reducer'

import HomeScreen from './src/screen/HomeScreen'
import BlogScreen from './src/screen/BlogScreen'
const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
})

const navigator = createBottomTabNavigator({
  Main: HomeNavigator,
  Blog: BlogScreen,
}, {
  initialRouteName: 'Main',
})

const App = createAppContainer(navigator)

export default () => {
  return (
    <Provider store={createStore(reducer)}>
      <BlogProvider>
      <App />
    </BlogProvider>
    </Provider>
  )
}

