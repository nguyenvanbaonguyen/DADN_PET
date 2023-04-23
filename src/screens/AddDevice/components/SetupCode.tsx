import React from 'react';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import InputField from '~/components/InputField/InputField';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import * as yup from 'yup';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {createDevice} from '~/redux/device/device';
import {useNavigation, useRoute} from '@react-navigation/native';
import { resetNavigate } from '~/navigators/globalNav';

const setupCodeSchema = yup.object().shape({
  code: yup
    .string()
    .matches(/[A-Za-z0-9-]+/g)
    .required('Device code is required'),
});

const SetupCode = ({}) => {
  const route = useRoute();
  const navigation = useNavigation();
  const index = route?.params?.index;
  const dispatch = useDispatch();
  const onSubmit = async data => {
    const callDevice = async () => {
      const {code} = data;
      console.log('values ', data);
      await dispatch(createDevice(index, {code}));

      console.log('successful');
      resetNavigate('MainNav');
    };
    try {
      await callDevice();
    } catch (error) {
      console.log('errors ', error);
      // Object.entries(error).forEach(([key, value]) =>
      //   console.log('errors ', key, value),
      // );
    }
  };

  return (
    <ViewCustom layout="my-12 px-15">
      <ViewCustom layout="p-15 bg-w" round shadow>
        <TextCustom type="fs-16 fw-bold">Setup Code</TextCustom>

        <Formik
          validationSchema={setupCodeSchema}
          initialValues={{code: ''}}
          onSubmit={onSubmit}>
          {({handleChange, handleSubmit, errors, touched}) => (
            <>
              <ViewCustom layout="mt-4 mb-16">
                <TextCustom type="fw-normal fs-13">
                  Nhập mã gồm 11 hoặc 21 ký tự trên thiết bị của bạn.
                </TextCustom>

                <InputField
                  placeHolder="Enter your setup code"
                  onChangeText={handleChange('code')}
                  keyboardType="defaults"
                  name="code"
                />

                {errors.code && touched.code && (
                  <TextCustom type="fs-10 cl-red">{errors.code}</TextCustom>
                )}

                <ViewCustom layout="ai-c">
                  <ButtonCustom
                    size="xs"
                    content="Kích hoạt"
                    layout="mt-15"
                    onPress={handleSubmit}
                  />
                </ViewCustom>
              </ViewCustom>
            </>
          )}
        </Formik>
      </ViewCustom>
    </ViewCustom>
  );
};

export default SetupCode;
