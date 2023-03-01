import React, { useState } from 'react'
import { Formik, useField } from 'formik'
import StyledTextInput from '../styledComponents/StyledTextInput'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
	error: {
		color: 'red',
		fontStyle: 'italic',
		opacity: 0.6,
		fontSize: 12.8,
		marginBottom: 5,
	},
})

export const FormikInputValue = ({ name, ...props }) => {
	const [field, meta, helpers] = useField(name)
	return (
		<>
			<StyledTextInput
				error={meta.error}
				value={field.value}
				onChangeText={(value) => helpers.setValue(value)}
				{...props}
			/>
			{meta.error && <Text style={styles.error}>{meta.error}</Text>}
		</>
	)
}