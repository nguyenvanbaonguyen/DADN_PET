import React, {useState} from 'react';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import TextCustom from '~/components/TextCustom/TextCustom';
import ViewCustom from '~/components/ViewCustom/ViewCustom';
import RadioInput from './components/RadioInput';
import TextInputCustom from './components/TextInput';

const pets = {
  name: 'Thú cưng của bạn',
  gender: 'Giới tính thú cưng',
  age: 'Tuổi theo tuần/tháng/năm',
  weight: 'Cân nặng theo kg',
  type: 'Giống loài',
};

const AddPet = () => {
  const [user, setUser] = useState(pets);
  return (
    <ViewCustom>
      <ViewCustom layout="px-15 mt-15">
        <TextInputCustom content="Tên thú cưng" name="name" user={user} />

        <RadioInput name="gender" user={user} setUser={setUser} />

        <TextInputCustom content="Tuổi" name="age" user={user} />

        <TextInputCustom content="Cân nặng" name="weight" user={user} />
        <TextInputCustom content="Giống loài" name="type" user={user} />
      </ViewCustom>
      <ViewCustom layout="ai-c">
        <ButtonCustom size="xs" content="Save" layout="mt-25" />
      </ViewCustom>
    </ViewCustom>
  );
};

export default AddPet;
