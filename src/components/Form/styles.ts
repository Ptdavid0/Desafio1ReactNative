import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingTop: 0,
    padding: 36,
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    borderRadius: 8,
    height: 56,
    paddingHorizontal: 24,
    marginRight: 8,
    color: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#236f9f",
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
