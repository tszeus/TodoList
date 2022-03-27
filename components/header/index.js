import styles from './style'

import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  const d = new Date();

  return (
    <View style={styles.header}>
  
      <Text style={styles.heading}>
          To-Do.
      </Text>
     
      
      <Text style={styles.date}>
          {d.getDay()} - {d.getMonth()} - {d.getFullYear()}
      </Text>
      
    </View>
  )
}

export default Header