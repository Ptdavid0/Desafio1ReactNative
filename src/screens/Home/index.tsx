import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  Alert,
  SafeAreaView,
} from "react-native";
import Participant from "../../components/Task";
import { Keyboard } from "react-native";
import { styles } from "./styles";
import logoImg from "../../../assets/logo.png";
import iconTask from "../../../assets/iconTask.png";
import { LinearGradient } from "expo-linear-gradient";

interface Participant {
  id: number;
  name: string;
}

interface Task {
  id: number;
  name: string;
  concluded: boolean;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskDescription, setTaskDescription] = useState("");
  const [tasksConcluded, setTasksConcluded] = useState(0);

  const handleTaskAdd = () => {
    setTasks((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        name: taskDescription,
        concluded: false,
      },
    ]);
    setTaskDescription("");
    // This line is the key to dismiss the keyboard
    Keyboard.dismiss();
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleParticipantRemove = (id: number, name: string) => {
    Alert.alert(
      "Remover participante",
      `Tem certeza que deseja remover ${name} ?`,
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => removeTask(id),
        },
      ]
    );
  };

  const InfoContainer = (
    <View style={styles.infoContainer}>
      <Text style={styles.infoTextCreated}>Criadas {tasks.length}</Text>
      <Text style={styles.infoTextFinished}>Concluidas {tasks.length}</Text>
    </View>
  );

  const FormContainer = (
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} style={styles.headerImage} />
      </View>

      {FormContainer}
      {InfoContainer}

      {tasks.length === 0 ? (
        <View style={styles.noTaskContainer}>
          <Image source={iconTask} style={styles.noTaskImage} />
          <Text style={styles.noTaskUpperText}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={styles.noTaskLowerText}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      ) : (
        <FlatList
          style={styles.participantsList}
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Participant
              name={item.name}
              remove={() => handleParticipantRemove(item.id, item.name)}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
