import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";

interface TasksProps {
  name: string;
  remove: () => void;
  handleTaskCheck: () => void;
  concluded: boolean;
}

const Task: React.FC<TasksProps> = ({
  name,
  remove,
  handleTaskCheck,
  concluded,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => handleTaskCheck()}>
        {concluded ? (
          <Feather name="check-circle" size={24} color="#236f9f" />
        ) : (
          <Feather name="circle" size={24} color="#236f9f" />
        )}
      </TouchableOpacity>
      <Text
        style={concluded ? styles.descriptionStrikethrough : styles.description}
      >
        {name}
      </Text>
      <TouchableOpacity activeOpacity={0.7} onPress={() => remove()}>
        <Feather name="trash" size={24} color="grey" />
      </TouchableOpacity>
    </View>
  );
};

export default Task;
