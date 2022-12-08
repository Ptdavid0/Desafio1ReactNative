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
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 36,
    paddingBottom: 48,
  },
  infoSubContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoTextCreated: {
    color: "#236f9f",
    marginRight: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  infoTextFinished: {
    marginRight: 8,
    color: "#5e60ce",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  participantsList: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 36,
  },
});
