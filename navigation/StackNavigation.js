import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {Home, ModalScreen, RealisticDetail} from '../screens';

const Modal = createStackNavigator();

const StackNavigation = () => {
  return (
    <Modal.Navigator
      mode="modal"
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}>
      <Modal.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Modal.Screen
        name="Modal"
        component={ModalScreen}
        options={{
          title: 'SUSUBOX APP',
          headerShown: true,
          headerTitleContainerStyle: {
            bottom: 20,
          },
          headerTitleStyle: {fontWeight: '800'},
          headerLeft: () => null,
          headerStyle: {
            height: 65,
            backgroundColor: '#fff',
            borderBottomWidth: 0,
          },
        }}
      />

      <Modal.Screen
        name="RealisticDetail"
        component={RealisticDetail}
        options={{headerShown: false}}
      />
    </Modal.Navigator>
  );
};

export default StackNavigation;
