import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ParticipantProps {
  name: string;
  remove: () => void;
}

const Participant: React.FC<ParticipantProps> = ({ name, remove }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => remove()}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Participant;
