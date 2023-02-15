import React from 'react'
import { View, Text } from 'react-native'

const StackScreen = () => {
  return (
    <View style={styles.container}>
        <Text>STACK SCREEN</Text>
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

export default StackScreen