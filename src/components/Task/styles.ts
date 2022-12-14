import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  description: {
    paddingHorizontal: 12,
    color: "#fff",
    flex: 1,
    fontSize: 16,
  },
  descriptionStrikethrough: {
    textDecorationLine: "line-through",
    color: "#808080",
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: "#E23C44",
    borderRadius: 8,
    height: 56,
    width: 56,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
