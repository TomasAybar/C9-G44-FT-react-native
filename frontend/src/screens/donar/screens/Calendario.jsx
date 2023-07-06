import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { EcoBtnNavigate } from '../../../components/EcoBtnNavigate'
import StyledView from '../../../styledComponents/StyledView'

export const Calendario = () => {
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [text, setText] = useState('Fecha')

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)

    const tempDate = new Date(currentDate)
    const fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear()
    const fTime =
      tempDate.getHours() + ' hs ' + (tempDate.getMinutes() + 1) + ' min'
    setText(fDate)
  }

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }

  return (
    <>
      <EcoBtnNavigate text={text} onPress={() => showMode('date')} />
      <StyledView>
        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={mode}
            display='default'
            onChange={onChange}
          />
        )}
      </StyledView>
    </>
  )
}
