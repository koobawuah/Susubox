import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SIZES, FONTS, images } from '../constants';


const RealisticDetail = ( { route, navigation }) => {

  const {bgColor, realistic} = route.params;

  return (
     <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: SIZES.padding, backgroundColor: bgColor }}>
        <Text style={{...FONTS.heroTitle, color: 'white', fontSize: 72,}}>{`${realistic}%`} </Text>
        <Text style={{...FONTS.heroTitle, color: 'white',}}>Realistic {`\n`}Saving Habit </Text>
        <Text style={{ fontFamily: 'Sansation-Regular', fontSize: 20, paddingVertical: SIZES.padding, color: 'white', }}>
          In Ghana, the average worker makes <Text style={{fontWeight:'600',}}>GHS12.54</Text>. 
          As a generally accepted saving rule( the 50, 30, 20 rule ), 20% off all income should be saved. 
          Based on that rule, we have determined how realistic it is to save 20% off your daily target instead... 
          (Not Considering Your Actual Income Wages).
        </Text>
        <Text style={{fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, fontWeight: '800', color: 'white',}}>
          NB: Adjust your savings duration to increase your realistic rate. 
        </Text>

        <TouchableOpacity
            style={{
                backgroundColor: 'white',
                width: 65,
                height: 65,
                borderRadius: 65,
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.padding,
                marginTop: 30,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            onPress={ () => navigation.goBack() }
            >
            <Image 
                source={images.close_icon}
                resizeMode='contain'
                style={{
                    height: 20,
                    width: 20,
                    tintColor: bgColor,
                }}
            />

        </TouchableOpacity>
     </View>
  )
}

export default RealisticDetail;