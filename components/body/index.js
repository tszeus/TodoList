import styles from './style'
import { View, Text} from 'react-native'
import React from 'react'
import {useState} from 'react'
import { Button } from 'react-native-paper'; 
import { Checkbox } from 'react-native-paper';
import {useStore}from '../../store'
import {delTodo} from '../../store'

const Body = () => {
  const [checked, setChecked] = useState(false);
 
  const handlerDelete = (id) => {
    dispash(delTodo(id))
  }
  const [state, dispash] = useStore()
  const {todos, todoInput} = state
  // console.log(todos)
  return (
    <View style={styles.body}>
      {todos.map((item, index) =>
        <View 
          key={index}
          style={styles.taskBox}
        >
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
            setChecked(!checked);
          }}
          />
          <View style={styles.text}>
            <Text style={styles.task}>{item}</Text>
          </View>
          <Button 
            style={styles.btnClose}
            mode="text" 
            onPress={() => handlerDelete(index)}
          >
            <Text style={styles.clearIcon}>X</Text>
          </Button>
        </View> 
        )}
    </View>
  )
}

export default Body