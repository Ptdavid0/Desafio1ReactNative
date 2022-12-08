import React from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";

import { styles } from "./styles";

interface FormProps {
  taskDescription: string;
  setTaskDescription: (value: string) => void;
  handleTaskAdd: () => void;
}

const Form: React.FC<FormProps> = ({
  taskDescription,
  setTaskDescription,
  handleTaskAdd,
}) => {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#9C98A6"
        value={taskDescription}
        onChangeText={setTaskDescription}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => handleTaskAdd()}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
