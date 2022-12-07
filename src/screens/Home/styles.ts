import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 24,
  },
  eventName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#fff",
    fontSize: 16,
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 48,
  },
  input: {
    flex: 1,
    backgroundColor: "#1F1E25",
    borderRadius: 8,
    height: 56,
    paddingHorizontal: 24,
    marginRight: 8,
    color: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#84e51c",
    borderRadius: 8,
    height: 56,
    width: 56,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
