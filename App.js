import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import StackNavigation from './navigation/StackNavigation';


const HomeStack = createStackNavigator(); 


const App = () =>  {

  return (
    <NavigationContainer theme={{dark: false, colors: { background: 'rgba(255, 255, 255, 1)',}}}>
      <StatusBar barStyle="dark-content" />
      <HomeStack.Navigator  headerMode='none'>
        <HomeStack.Screen name='Modal' component={StackNavigation} />
      </HomeStack.Navigator>
    </NavigationContainer>
  )
} 


export default App;
