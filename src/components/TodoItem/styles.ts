import { StyleSheet } from "react-native";
import themes from "../../themes/themes";

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    backgroundColor: themes.colors.gray700Desc_2,
    height: 64,
    width: 300,
    borderRadius: 8,

    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: themes.colors.gray400,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 8,
    marginTop: 20,
  },
  checkView: {
    height: 18,
    width: 18,
    borderWidth: 2,
    borderColor: themes.colors.blueDarkButton,
    borderRadius: 50,
  },
  todoHolder: {
    width: 235,
    alignItems: "center",
    justifyContent: "center",
  },
  todoDescription: {
    color: themes.colors.gray100,
    fontSize: 14,
    paddingHorizontal: 6,
  },
  trashIcon: {
    height: 20,
  },
});

export default styles;
