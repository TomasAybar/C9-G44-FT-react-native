import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { EcoBtnNavigate } from '../../components/EcoBtnNavigate';
import StyledView from '../../styledComponents/StyledView';

export const HoraDesde = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Desde');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fTime = tempDate.getHours() + ' hs ' + tempDate.getMinutes() + ' min';
    setText(fTime);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <>
      <EcoBtnNavigate text={text} onPress={() => showMode('time')} />
      <StyledView>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            display="default"
            onChange={onChange}
            is24Hour={true}
          />
        )}
      </StyledView>
    </>
  );
};
