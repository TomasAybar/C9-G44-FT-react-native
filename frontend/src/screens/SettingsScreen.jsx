import React from 'react'
import { View, Text } from 'react-native'

const Settings = () => {
  return (
    <View style={styles.container}>
        <Text>SETTINGS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Settings