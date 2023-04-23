import React from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {ScrollView, Image} from 'react-native';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import ImageCustom from '~/components/ImageCustom/ImageCustom';
import InputCustom from '~/components/InputCustom/InputCustom';
import SafeViewCustom from '~/components/SafeViewCustom/SafeViewCustom';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import {resetNavigate} from '~/navigators/globalNav';
import {NavigatorProps} from '~/navigators/navigator';
import {loginUser} from '~/redux/user';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';
import {Formik} from 'formik';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const Login = ({navigation, route}: NavigatorProps) => {
  const dispatch = useDispatch();
  const onSubmit = async data => {
    const callLogin = async () => {
      const {email, password} = data;
      console.log('values ', data);
      await dispatch(loginUser({ email, password }));
      resetNavigate('MainNav');
    };
    try {
      await callLogin();
    } catch (error) {
      console.log('errors ', error);
      // Object.entries(error).forEach(([key, value]) =>
      //   console.log('errors ', key, value),
      // );
    }
  };

  return (
    <SafeViewCustom blue>
      <KeyboardAvoidingView style={{flex: 1}} behavior="height">
        <ScrollView>
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

            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{email: '', password: ''}}
              onSubmit={onSubmit}>
              {({
                handleChange,
                handleSubmit,
                values,
                errors,
                isValid,
                touched,
              }) => (
                <>
                  <ViewCustom layout="mb-15">
                    <InputCustom
                      placeHolder="Email"
                      onChangeText={handleChange('email')}
                      keyboardType="email-address"
                      name="email"
                    />
                  </ViewCustom>

                  <ViewCustom>
                    <InputCustom
                      placeHolder="Password"
                      secureTextEntry={true}
                      onChangeText={handleChange('password')}
                      keyboardType="password"
                      name="password"
                    />
                    {errors.password && touched.password && (
                      <TextCustom type="fs-10 cl-red">
                        {errors.password}
                      </TextCustom>
                    )}
                  </ViewCustom>
                  <ButtonCustom
                    size="xss"
                    content="Login"
                    layout="mt-15"
                    onPress={handleSubmit}
                  />
                </>
              )}
            </Formik>
            <ButtonCustom size="xss" content="Sign up" layout="mt-15" outline />

            <ViewCustom layout="jc-c mt-30 fd-r">
              <TextCustom type="fs-16">
                Forgot password?{' '}
                <TextCustom type="fs-16" underline>
                  Click here
                </TextCustom>
              </TextCustom>
            </ViewCustom>
          </ViewCustom>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeViewCustom>
  );
};

const styles = StyleSheet.create({
  imageStyle: {height: 80, width: 240},
});

export default Login;
