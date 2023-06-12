import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import theme from '../themes/theme'
import { ArrowForward } from './icons/ArrowForward'
import { ArrowUp } from './icons/ArrowUp'

export const EcoSelectOption = ({
  options = [
    { label: 'Opción 1', value: 'option1' },
    { label: 'Opción 2', value: 'option2' },
    { label: 'Opción 3', value: 'option3' }
  ],
  placeholder = 'placeholder',
  onChangeValue
}) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState(options)

  const [selectedItem, setSelectedItem] = useState(null)

  // console.log(selectedItem)

  return (
    <View style={styles.containerStyle}>
      <DropDownPicker
        open={open}
        items={items}
        value={value}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={placeholder}
        ArrowUpIconComponent={() => <ArrowUp />}
        ArrowDownIconComponent={() => <ArrowForward />}
        dropDownDirection='BOTTOM'
        style={styles.picker}
        placeholderStyle={{ color: '#fff', fontSize: 16 }}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        labelStyle={{ color: '#fff', fontSize: 16 }}
        listItemLabelStyle={{
          color: '#fff',
          fontSize: 16
        }}
        selectedItemLabelStyle={{ color: theme.colors.yellowPrimary }}
        showTickIcon={false}
        // onChangeValue={(value) => {
        // 	console.log(value)
        // }}
        // onChangeValue={(value) => setSelectedItem(value)}
        onChangeValue={onChangeValue}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 50,
    width: '100%',
    marginBottom: 30
  },
  picker: {
    backgroundColor: theme.colors.greyPrimary,
    borderRadius: 10,
    paddingHorizontal: 12,
    zIndex: 100,
    height: 60
  },
  dropDownContainerStyle: {
    backgroundColor: theme.colors.greyPrimary
  }
})
