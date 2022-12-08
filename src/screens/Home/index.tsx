import React, { useState } from "react";
import { Text, View, FlatList, Image, Alert, SafeAreaView } from "react-native";
import Task from "../../components/Task";
import { Keyboard } from "react-native";
import { styles } from "./styles";
import logoImg from "../../../assets/logo.png";
import EmptyState from "../../components/EmptyState";
import Form from "../../components/Form";
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
    if (tasks.find((task) => task.id === id)?.concluded) {
      setTasksConcluded(tasksConcluded - 1);
    }
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleTaskCheck = (id: number) => {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id === id) {
          task.concluded = !task.concluded;
          if (task.concluded) {
            setTasksConcluded(tasksConcluded + 1);
          } else {
            setTasksConcluded(tasksConcluded - 1);
          }
        }
        return task;
      })
    );
  };

  const handleTaskRemove = (id: number) => {
    Alert.alert(
      "Remover Tarefa",
      `Tem certeza que deseja remover essa tarefa ?`,
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} style={styles.headerImage} />
      </View>
      <Form
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
        handleTaskAdd={handleTaskAdd}
      />
      <View style={styles.infoContainer}>
        <View style={styles.infoSubContainer}>
          <Text style={styles.infoTextCreated}>Criadas</Text>
          <Text style={styles.infoText}>{tasks.length}</Text>
        </View>

        <View style={styles.infoSubContainer}>
          <Text style={styles.infoTextFinished}>Concluidas</Text>
          <Text style={styles.infoText}>{tasksConcluded}</Text>
        </View>
      </View>

      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <FlatList
          style={styles.participantsList}
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Task
              name={item.name}
              remove={() => handleTaskRemove(item.id)}
              handleTaskCheck={() => handleTaskCheck(item.id)}
              concluded={item.concluded}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
