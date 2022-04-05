import styles from "./style";
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useState, useRef } from "react";
import { Checkbox } from "react-native-paper";
import { useStore } from "../../store";
import { delTodo } from "../../store";

const Body = () => {
  const [checked, setChecked] = useState(false);

  const handlerDelete = (id) => {
    dispash(delTodo(id));
  };

  const handlePress = () => {
    itemRef.current.style.backgroundColor = "#000";
  };
  const itemRef = useRef();
  const [state, dispash] = useStore();
  const { todos, todoInput } = state;
  // console.log(todos)
  return (
    <View style={styles.body}>
      {todos.map((item, index) => (
        <View ref={itemRef} key={index} style={styles.taskBox}>
          <View
            style={[
              styles.numberBox,
              index % 2 === 0 ? styles.eve : styles.odd,
            ]}
          >
            <Text style={styles.numberText}>
              {index < 9 ? `0${index + 1}` : index + 1}
            </Text>
          </View>

          <View style={styles.textBox}>
            <Text style={styles.task}>{item}</Text>
          </View>
          <TouchableOpacity
            style={styles.btnClose}
            onPress={() => handlerDelete(index)}
          >
            <Text style={styles.clearIcon}>X</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Body;
