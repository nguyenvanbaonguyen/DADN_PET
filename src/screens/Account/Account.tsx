import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import RadioInput from './componets/RadioInput';
import TextInputCustom from './componets/TextInput';

const USER = {
  fullName: 'Nguyễn Văn Bảo Nguyên',
  gender: 'Nam',
  birthDay: '01/02/2022',
  phone: '0123456789',
  email: 'nguyenvanbaonguyennth@gmail.com',
};

const Account = () => {
  const [user, setUser] = useState(USER);
  return (
    <ViewCustom layout="px-15 mt-15">
      <TextCustom type="fs-20 cl-gray fw-semi">Thông tin cá nhân</TextCustom>

      <TextInputCustom
        content="Họ và tên"
        name="fullName"
        setUser={setUser}
        user={user}
      />

      <RadioInput name="gender" user={user} setUser={setUser} />

      <TextInputCustom
        content="Ngày sinh"
        name="fullName"
        setUser={setUser}
        user={user}
      />

      <TextInputCustom
        content="Số điện thoại"
        name="phone"
        setUser={setUser}
        user={user}
      />
      <TextInputCustom
        content="Email"
        name="email"
        setUser={setUser}
        user={user}
      />

      <ViewCustom layout="mt-15">
        <TextCustom type="fs-16">Password</TextCustom>
        <ButtonCustom size="x" content="Đổi mật khẩu" layout="mt-10" />
      </ViewCustom>
    </ViewCustom>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    padding: 12,
    backgroundColor: '#F5F7F9',
    color: 'black',
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#BAC7D5',
    borderRadius: 6,
  },
});

export default Account;
