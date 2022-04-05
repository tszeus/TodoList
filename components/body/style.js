import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  taskBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
  },
  numberBox: {
    width: 40,
    height: 30,
    margin: 8,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 20,
  },
  eve: {
    backgroundColor: "#2EA043",
  },
  odd: {
    backgroundColor: "#19196f",
  },
  textBox: {
    // flex: 1,
    // display: "flex",
    // justifyContent: "flex-start",
    width: "70%",
    // marginRight: 90,
  },
  task: {
    fontSize: 15,
    color: "#19196f",
    fontWeight: "bold",
  },
  btnClose: {
    width: 40,
    minWidth: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    backgroundColor: "#19196f",
    marginRight: 4,
    borderWidth: 5,
    borderColor: "#fff",
    // position: "absolute",
    // right: 0,
  },
  clearIcon: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "100",
  },
  check: {
    backgroundColor: "#333",
  },
});

export default styles;
