import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
  },
  header: {
    alignItems: "center",
  },
  headerImage: {
    resizeMode: "contain",
    width: 150,
    height: 150,
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingTop: 0,
    padding: 36,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 36,
    borderBottomColor: "#333333",
    borderBottomWidth: 0.5,
    paddingBottom: 20,
  },
  infoTextCreated: {
    color: "#236f9f",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoTextFinished: {
    color: "#5e60ce",
    fontSize: 16,
    fontWeight: "bold",
  },
  participantsList: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 36,
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
  noTaskContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 48,
  },
  noTaskUpperText: {
    color: "#656565",
    fontSize: 16,
    fontWeight: "bold",
  },
  noTaskLowerText: {
    color: "#656565",
    fontSize: 17,
  },
  noTaskImage: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    opacity: 0.4,
    marginBottom: 16,
  },
});
