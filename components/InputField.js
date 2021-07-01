import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { FONTS, SIZES, COLORS, } from '../constants'

const InputField = (props) => {


    return (
        <View>
            <Text style={{
                ...FONTS.h4, 
                color: COLORS.primary,
                paddingVertical: SIZES.padding2,
                textAlign: 'center',
            }}> 
                {props.labelText}
            </Text>
            <TextInput
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                value={props.value}
                maxLength={props.maxLength}
                keyboardType='decimal-pad'
                style={{
                    width: 153,
                    height: 68,
                    color: COLORS.primary,
                    backgroundColor: COLORS.lightGray,
                    borderWidth: 1,
                    borderColor: '#c4c4c4',
                    borderRadius: SIZES.radius2,
                    textAlign: 'center',
                    ...FONTS.heroTitle,
                }}
                
            />  
        </View>
    )
}

export default InputField;