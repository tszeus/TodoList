import styles from './style'

import { View, Text, TextInput} from 'react-native'
import React, { useRef } from 'react'
import { Button } from 'react-native-paper'; 
import {useStore, setInputTodo, addTodo} from '../../store'

const Footer = () => {
  const inputRef = useRef();
  const [state, dispash] = useStore()
  const {todos, todoInput} = state
  
  const handlerAdd = () => {
    if (todoInput !== '' ) {
      dispash(addTodo(todoInput))
      inputRef.current.focus()
    // console.log(todos)
      dispash((setInputTodo('')))
    }
  }
  return (
    <View style={styles.footer}>
        <View style={styles.inputBox}>
            <TextInput
                value={todoInput}
                ref={inputRef}
                style={styles.inputStyle}
                placeholder='Add Task...'
                onChangeText={(e) => {dispash(setInputTodo(e))}}
            />
        </View>
        <Button 
          style={styles.btn}
          mode="text" 
          onPress={handlerAdd}
        >
          <Text style={styles.addIcon}>+</Text>
        </Button>
      
        
    </View>
  )
}

export default Footer