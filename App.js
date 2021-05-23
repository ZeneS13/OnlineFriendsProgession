import * as React from 'react';
import {  Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'

const AppTabNavigator= createBottomTabNavigator(
  {
    Home: {screen:HomeScreen},
    Search : {screen: SearchScreen}
  }
)

const SwitchNavigator=createSwitchNavigator(
  {
    Login: {screen:LoginScreen},
    BottomTab:{screen:AppTabNavigator}
  }
)

const AppContainer=createAppContainer(SwitchNavigator)

export default class App extends React.Component {
  render(){
   return(
     <AppContainer/>
   )

  }
}

