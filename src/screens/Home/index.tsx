import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import Participant from "../../components/Participant";
import { Keyboard } from "react-native";
import { styles } from "./styles";

interface Participant {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [participantName, setParticipantName] = useState("");

  const handlePartipantAdd = () => {
    setParticipants((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        name: participantName,
      },
    ]);
    setParticipantName("");
    // This line is the key to dismiss the keyboard
    Keyboard.dismiss();
  };

  const removeParticipant = (id: number) => {
    setParticipants(
      participants.filter((participant) => participant.id !== id)
    );
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
          onPress: () => removeParticipant(id),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#9C98A6"
          value={participantName}
          onChangeText={setParticipantName}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => handlePartipantAdd()}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      {participants.length === 0 ? (
        <Text style={styles.noParticipantText}>
          Nenhum participante esta presente ate o momento
        </Text>
      ) : (
        <FlatList
          style={styles.participantsList}
          data={participants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Participant
              name={item.name}
              remove={() => handleParticipantRemove(item.id, item.name)}
            />
          )}
        />
      )}
    </View>
  );
};

export default Home;
