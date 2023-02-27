import React from 'react'
import { StyleSheet, View } from 'react-native'
import StyledText from '../styledComponents/StyledText'

export const ListPaso = ({ number = '1', content }) => {
	return (
		<View style={{ marginBottom: 25 }}>
			<StyledText left size16>
				•Paso {number}:
			</StyledText>
			<StyledText left size16>
				{content}
			</StyledText>
		</View>
	)
}

const styles = StyleSheet.create({})
