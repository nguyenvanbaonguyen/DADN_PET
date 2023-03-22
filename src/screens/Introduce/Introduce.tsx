import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import ImageCustom from '~/components/ImageCustom/ImageCustom';
import LoadingWrapper from '~/components/Loading/LoadingWrapper';
import SafeViewCustom from '~/components/SafeViewCustom/SafeViewCustom';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import {IS_LAUNCHED} from '~/helpers/storage';
import {resetNavigate} from '~/navigators/globalNav';
import {NavigatorProps} from '~/navigators/navigator';
import WhatWeDo from './Components/WhatWeDo';

const Introduce = ({navigation}: NavigatorProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const navigateToScreen = async () => {
      const isLaunched = await IS_LAUNCHED.get();
      if (isLaunched) {
        resetNavigate('AuthNav');
        setIsLoading(false);
      }
      setIsLoading(false);
    };

    navigateToScreen();
  }, [navigation]);

  const handleStart = async () => {
    await IS_LAUNCHED.set('launch');
    resetNavigate('AuthNav');
  };

  return (
    <LoadingWrapper condition={!isLoading}>
      <SafeViewCustom blue>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <TextCustom type="fs-32 fw-bold align-c cl-blue">
              We’re Here to Care of Little Pets
            </TextCustom>
            <ViewCustom layout="ai-c my-30">
              <ImageCustom name="petBackgroundImage" height={300} width={300} />
            </ViewCustom>

            <ButtonCustom
              size="xss"
              content="Get Started"
              iconRight="arrowright"
              onPress={handleStart}
            />

            <ViewCustom layout="ai-c mt-30">
              <TextCustom type="fw-bold fs-24 cl-blue">
                What we can do
              </TextCustom>
            </ViewCustom>

            <WhatWeDo />
          </View>
        </ScrollView>
      </SafeViewCustom>
    </LoadingWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 60,
  },
  buttonStyle: {
    height: 44,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0172CB',
    borderRadius: 6,
    marginVertical: 30,
    flexDirection: 'row',
  },
  textButton: {
    fontSize: 16,
    color: 'white',
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default Introduce;
