import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopLeftRadius:30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 20,
  },
  form: {
    width: "100%",
  },
  formLabel: {
    color: "#1877f2",
    fontSize: 18,
    paddingLeft: 20,
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    paddingLeft: 10,
    marginLeft: 20,
    marginBottom: 15,
  },
  buttonCalculator:{
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    backgroundColor: "#FF0043",
    paddingTop: 10,
    paddingBottom: 10,
    margin: 20,
    alignSelf: "center",
  },
  textButtonCalculator:{
    fontSize: 18,
    color: "#ffffff",
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    paddingLeft: 20,
  }
});

export default styles;