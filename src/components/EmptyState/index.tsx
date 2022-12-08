import React from "react";
import { View, Text, Image } from "react-native";
import iconTask from "../../../assets/iconTask.png";
import { styles } from "./styles";

const EmptyState: React.FC = () => {
  return (
    <View style={styles.noTaskContainer}>
      <Image source={iconTask} style={styles.noTaskImage} />
      <Text style={styles.noTaskUpperText}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.noTaskLowerText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
};

export default EmptyState;
