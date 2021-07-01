import { Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary : '#1D1717', //charcoal black
    secondary : '#4BCF0D', //code green

    gray: '#C4C4C4',
    lightGray: '#EEEEEE'
}

export const SIZES = {

    padding: 25,
    padding2: 15,
    radius: 40,
    radius2: 15,


    heroTitle: 36,
    font: 14,
    h1: 36,
    h2 : 24,
    h3 : 14,
    h4: 10,


    width,
    height
}

export const FONTS = {
    heroTitle : { fontFamily: 'Roboto-Bold', fontSize: SIZES.heroTitle, fontWeight: '800', flexWrap: 'wrap', },
    font:  { fontFamily: 'Sansation-Regular', lineHeight: 16, fontSize: SIZES.font, paddingVertical: SIZES.padding2,},
    h1 : { fontFamily:  'Sansation-Bold', fontSize: SIZES.h1, lineHeight: 16, paddingVertical: SIZES.padding2,},
    h2: { fontFamily:  'Sansation-Bold', fontSize: SIZES.h2, lineHeight: 16, paddingVertical: SIZES.padding2,},
    h3: { fontFamily:  'Sansation-Regular', fontSize: SIZES.h3, lineHeight: 16, paddingVertical: SIZES.padding2,},
    h4: { fontFamily: 'Sansation-Bold', lineHeight: 30,}, 
}

export const appTheme = { SIZES, FONTS, COLORS };

export default appTheme;
