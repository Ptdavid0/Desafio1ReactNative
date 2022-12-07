import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  FlatList,
} from "react-native";
import Participant from "../../components/Participant";
import { styles } from "./styles";

interface Participant {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [participantName, setParticipantName] = useState("");

  const handlePartipantAdd = () => {
    setParticipants([
      ...participants,
      {
        id: Math.random(),
        name: participantName,
      },
    ]);
    setParticipantName("");
  };

  const handleParticipantRemove = (id: number) => {
    setParticipants(
      participants.filter((participant) => participant.id !== id)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
      <StatusBar style="auto" />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#9C98A6"
          value={participantName}
          onChangeText={(text) => setParticipantName(text)}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => handlePartipantAdd()}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Participant
            name={item.name}
            remove={() => handleParticipantRemove(item.id)}
          />
        )}
      />
    </View>
  );
};

export default Home;
