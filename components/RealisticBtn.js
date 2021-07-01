import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';

import { COLORS, SIZES } from '../constants'


const RealisticBtn = (props) => {

    return (
      <View>
          <TouchableOpacity style={{
                width: 120,
                height: 28,
                backgroundColor: props.bgColor,
                paddingHorizontal: 10,
                marginTop: SIZES.padding2,
                borderRadius: SIZES.radius,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={props.onPress}>
                <Text style={{fontFamily: 'Sansation-Regular', fontSize: 10, fontWeight: '800', color: '#ffffff',}}> 
                  {props.displayText}
                </Text>
              </TouchableOpacity>
      </View>
    )


}

export default RealisticBtn;