import React from 'react';
import {ScrollView, View, Text, Linking, Alert} from 'react-native';

import InAppBrowser from 'react-native-inappbrowser-reborn';

import {COLORS, SIZES, images} from '../constants';
import {List} from '../components';

const ModalScreen = () => {
  const links = {
    apphomelink: 'https://bawuahboakye.com/susubox/',
    pplink: 'https://bawuahboakye.com/susubox/privacy-policy',
    aboutapplink: 'https://bawuahboakye.com/susubox/about',
    mailto:
      'mailto:me@bawuahboakye.com?subject=Susubox%20Development%20Team&body=Say%20Hi%20...',
  };

  //Sending mail to developer
  const mailtoPress = async () => {
    try {
      const sendMail = await Linking.openURL(links.mailto);
      sendMail;
    } catch (error) {
      console.log(error);
    }
  };

  //Linking to Instagram App
  const openLinkUrl = async url => {
    const insta = await Linking.openURL(url);
    insta;
  };

  //InAppBrowser Link opener
  const openLink = async linkUrl => {
    try {
      if (await InAppBrowser.isAvailable()) {
        const goToLink = await InAppBrowser.open(linkUrl, {
          modalEnabled: false,
          dismissButtonStyle: 'done',
          preferredBarTintColor: '#FFF9E0',
          preferredControlTintColor: '#000',
          readerMode: false,
          animated: true,
        });
        return goToLink;
      } else {
        return Linking.openURL(linkUrl);
      }
    } catch (e) {
      console.log('There was a problem: ' + e);
    }
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray,
        paddingVertical: SIZES.padding,
      }}>
      <View style={{marginVertical: 25}}>
        <List
          contextText="Contact Us"
          onPress={async () => mailtoPress().catch(e => console.log(e))}
        />
        <List
          contextText="Privacy Policy"
          onPress={() => openLink(links.pplink)}
        />
        <List
          contextText="About Susubox"
          onPress={async () => openLink(links.apphomelink)}
        />
      </View>
      <View style={{marginVertical: 25}}>
        <List
          source={images.instagram_icon}
          contextText="Instagram"
          onPress={() =>
            openLinkUrl('instagram://user?username=koobawuah').catch(e =>
              console.log(`Can't open ${e}`),
            )
          }
        />
        <List
          source={images.worldwide}
          contextText="Website"
          onPress={() => openLink(links.apphomelink)}
        />
      </View>
      <View style={{marginVertical: 25}}>
        <Text style={{paddingHorizontal: SIZES.padding}}>SUSUBOX APP V1.0</Text>
      </View>
    </ScrollView>
  );
};

export default ModalScreen;
