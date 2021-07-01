import React from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';

import { SIZES } from '../constants';


const List = (props) => {
        
    return (
        <View style={{
            width: SIZES.width, 
            paddingVertical: SIZES.padding, 
            paddingHorizontal: SIZES.padding,
            backgroundColor: '#fff',
            }}>
            <TouchableOpacity 
                style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={props.onPress}
                >
                {
                    props.source &&
                    <Image 
                    source={props.source}
                    resizeMode='contain'
                    style={{
                        width: 24,
                        height: 24,
                        marginRight: SIZES.padding2,
                    }}
                    /> 
                
                }
                <Text style={{
                        fontFamily: 'Sansation-Regular', 
                        fontWeight: '300',
                        fontSize: 14,
                     }}> 
                        {props.contextText} 
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default List; 