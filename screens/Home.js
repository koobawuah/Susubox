import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
  FlatList, 
  Share, 
  Alert, 
  LayoutAnimation, 
  Platform, 
  UIManager 
} from 'react-native';

import { images, COLORS, FONTS, SIZES, Data } from '../constants';
import { InputField, CustomBtn, RealisticBtn } from '../components';

const Home = ( {navigation} ) => {

    const [activeCategory, setActiveCategory] = React.useState(1);
    const [days, setDays] = React.useState();
    const [target, setTarget] = React.useState();
    const [saveDaily, setSaveDaily] = React.useState();
    const [bgColor, setBgColor] = React.useState();
    const [realistic, setRealistic] = React.useState();
    const [highMoneyVisible, setHighMoneyVisible] = React.useState(false);

    //calculate amount to save dily
    const calculateSaveDaily = (days, target) => {
      setDays(days);
      setTarget(target);
      
      if (days && target ) {
        const save = target / days;
        setSaveDaily(save)
      }
    }

    //useEffect to check Realistic percentage rate
    React.useEffect( () => {

      const p = 2.5
      const res = Math.floor(p/saveDaily*100)
      console.log(res);
      setRealistic(res)

      if (res > 0 && res < 50) {
        console.log('Poor saving habit')
        setBgColor('#F04C46');
      } else if( res >= 50 && res <= 75){
        console.log('Average saving habit')
        setBgColor('#FFCE00');
      } else if( res >= 76 && res <= 100) {
        console.log('Good saving habit')
        setBgColor(COLORS.secondary);
      } else {
        console.log('Normal Saving habit')
        setBgColor(COLORS.gray)
      } 

    }, [saveDaily])

    //Async await Sharing, sharing goals to other apps
    const shareMoneyGoal = async () => {
      try {
        const result = await Share.share({
          message: `Susubox App says, I will need to save GHS${saveDaily.toFixed(2)} daily, to be able to reach my savings goal of GHS${target}, with a realistic saving rate of ${realistic}%. I calculated the steps to reach my savings goal with the Susubox App, check yours now by downloading the app here; https://bawuahboakye.com/susubox`
        })
      } catch (err) {
        Alert.alert('Something Went Wrong', 'There was a problem: ' + err)
      }

    }


    if (
      Platform.OS === "android" &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    
    //useEffect to change money image
    React.useEffect ( ()=> {
      if(realistic >= 50) {
        setHighMoneyVisible(true)
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
      } else {
        setHighMoneyVisible(false)
      }
    }, [realistic]
    )


    return (

    <View style={{flex: 1, paddingTop: 50, backgroundColor: '#fff' }}>
      
      <View style={{paddingHorizontal: SIZES.padding, }}>
        <TouchableOpacity 
          onPress={ () => navigation.navigate('Modal')}
          >
          <Image 
            source={images.menu_icon}
            resizeMode='contain'
            style={{ 
              width: 28,
              height: 28,
            }}
            />  
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1,}}>

         {/* Calc Area & Image */ } 
        <View style={{
          flex: 1, 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          paddingVertical: 28,
          paddingHorizontal: 25, }}>

            <View style={{flex: 2,}}>
              <Text style={{...FONTS.h3, }}>You need</Text>
              <Text style={{...FONTS.heroTitle, fontSize: 26,  }}>{ saveDaily == null?'GHS0': `GHS${saveDaily.toFixed(2)}` }</Text>
              <Text style={{...FONTS.h3, flexWrap: 'wrap', width: 120,}}>
                  {`saved daily ${days? `for ${days} days `:'' }to reach your Goal!`}
              </Text>

              
              <RealisticBtn 
                bgColor={bgColor}
                displayText={`${saveDaily?realistic:'0'}% Realistic Habit`} 
                onPress={ () => saveDaily && navigation.navigate('RealisticDetail', 
                {
                  bgColor,
                  realistic
                }) }
                />

            </View>
          
            <Image 
              source={highMoneyVisible?images.high_money:images.low_money}
              reseizeMode='contain'
              style={{
                minHeight: '25%',
                minWidth: '25%',
                position: 'absolute',
                right: 0,
                zIndex: -1, 
              }}
              />
        </View>

            {/* Text input & Numbers */ } 
            <View style={{
              flex: 1, 
              flexDirection: 'row', 
              justifyContent:"space-around",
              }}>

              <InputField 
                onChangeText={(text) => calculateSaveDaily(text, target) }
                value={days}
                maxLength={3} 
                placeholder='Days' 
                labelText='Savings Duration' />

              <InputField
                onChangeText={(text) => calculateSaveDaily(days, text) }
                value={target} 
                maxLength={7} 
                placeholder='GH0.00' 
                labelText='Money Target' />

            </View>

            {/* Disclaimer Text && Share Button */}
            <View style={{flex:1, alignItems:'center'}}>
              <Text style={{...FONTS.font, color: COLORS.gray, marginTop: 25, paddingVertical: SIZES.padding2,}}>
                * All calculations are made in GHc
              </Text>
              
              <CustomBtn 
                btnText='Share My Money Goals!'
                onPress={()=> ( target && saveDaily ?shareMoneyGoal():Alert.alert('Sorry', 'There is nothing to share :('), console.log('Sharing your money goals...') ) }
                />
            </View>
                {/* You will need to save GHSX.XX daily, to be able to reach your savings goal of 
                GHSXX.XX. I calculated the steps to reach my savings goal with the
                Susubox App, check yours now by downloading from here; 
                Platform iOS link : android link */}

            {/* sub-section with lists */}
            <View style={{
              flex: 1,
              backgroundColor: COLORS.lightGray,
              borderTopRightRadius: SIZES.radius,
              borderTopLeftRadius: SIZES.radius,
              paddingVertical: 50,
              marginTop: SIZES.padding,
            }}>

                <FlatList 
                  style={{flex:1, }}
                  keyExtractor={ index => `${index.id}` }
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={Data}
                  renderItem={ ({item}) => (
                    
                      <TouchableOpacity
                        onPress={ () => setActiveCategory(item.id)}>
                          { activeCategory == item.id && <Text style={{...FONTS.h2, paddingHorizontal: SIZES.padding,}}> 
                            {item.title} 
                          </Text> }

                          { activeCategory!= item.id && <Text style={{...FONTS.h2, fontWeight: '400', color: COLORS.gray, paddingHorizontal: SIZES.padding,}}> 
                            {item.title} 
                          </Text> }
                      </TouchableOpacity>
                      )
                    }
                  />
                  

                  <View style={{flex:1, marginBottom: SIZES.padding,}}>
                     {
                      Data.map( (item) => 
                        activeCategory == item.id && item.body.map( (item) => 
                        <Text 
                          key={item} 
                          style={{
                              ...FONTS.font, 
                              lineHeight: 14, 
                              paddingHorizontal: SIZES.padding,
                            }}> 
                              {item} 
                          </Text>)
                      )
                    }
                  </View>
                  
            </View>

      </ScrollView>
      
    </View>
    )
}

export default Home;