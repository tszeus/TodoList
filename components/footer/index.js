import styles from './style'

import { View, Text, TextInput, TouchableOpacity, Keyboard} from 'react-native'
import React, { useRef } from 'react'
import {useStore, setInputTodo, addTodo} from '../../store'
// import { TouchableOpacity } from 'react-native-web';

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
      Keyboard.dismiss()
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
        <TouchableOpacity
          style={styles.btn}
          onPress={handlerAdd}
        >
          <Text style={styles.addIcon}> + </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Footer