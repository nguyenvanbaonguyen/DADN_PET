import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Image} from 'react-native';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import ImageCustom from '~/components/ImageCustom/ImageCustom';
import InputCustom from '~/components/InputCustom/InputCustom';
import SafeViewCustom from '~/components/SafeViewCustom/SafeViewCustom';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import {resetNavigate} from '~/navigators/globalNav';
import {NavigatorProps} from '~/navigators/navigator';

const Login = ({navigation, route}: NavigatorProps) => {
  return (
    <SafeViewCustom blue>
      <ViewCustom layout="pt-30 px-30">
        <ViewCustom layout="ai-c mb-15">
          <Image
            source={require('~/assets/images/petLogo.png')}
            style={styles.imageStyle}
          />
        </ViewCustom>

        <ViewCustom layout="mb-30 ai-c">
          <ImageCustom width={200} height={200} name="petBackgroundImage" />
        </ViewCustom>

        <InputCustom placeHolder="Username" />
        <InputCustom placeHolder="Password" />

        <ButtonCustom
          size="xss"
          content="Login"
          layout="mt-15"
          onPress={() => resetNavigate('MainNav')}
        />
        <ButtonCustom size="xss" content="Sign up" layout="mt-15" outline />

        <ViewCustom layout="jc-c mt-30 fd-r">
          <TextCustom type="fs-18">
            Forgot password?{' '}
            <TextCustom type="fs-18" underline>
              Click here
            </TextCustom>
          </TextCustom>
        </ViewCustom>
      </ViewCustom>
    </SafeViewCustom>
  );
};

const styles = StyleSheet.create({
  imageStyle: {height: 80, width: 240},
});

export default Login;
