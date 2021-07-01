import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';

import { COLORS, SIZES, FONTS } from '../constants';

const CustomBtn = (props) => {

return (
    <View style={{flex: 1,}}>
        <TouchableOpacity 
            onPress={props.onPress}
            style={{
                width: 296,
                height: 63,
                backgroundColor : COLORS.primary,
                paddingVertical: SIZES.padding2,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
            <Text style={{ color: COLORS.secondary, ...FONTS.h4,}}>
                {props.btnText}
            </Text>
        </TouchableOpacity>
    </View>
)
}

export default CustomBtn;