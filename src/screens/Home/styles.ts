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
});
