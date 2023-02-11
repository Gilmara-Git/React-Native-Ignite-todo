import styles from "./styles";
import themes from "../../themes/themes";
import { View, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import Plus from "../../assets/plus.svg";

interface DataEntryProps {
  onAddTodo: (todo: string) => void;
}

export const DataEntry = ({ onAddTodo }: DataEntryProps) => {
  const [inputFocusedColor, setInputFocusedColor] = useState("transparent");
  const [enteredTodo, setEnteredTodo] = useState("");

  const focusedInputBorderColor = () => {
    setInputFocusedColor(themes.colors.purple);
  };
  const blurredInputBorderColor = () => {
    setInputFocusedColor("transparent");
  };

  const todoHandler = (text: string) => {
    setEnteredTodo(text);
  };

  const sendTodo = () => {
    onAddTodo(enteredTodo);
    setEnteredTodo("");
  };
  return (
    <View style={styles.inputButtonHolder}>
      <TextInput
        style={[styles.input, { borderColor: inputFocusedColor }]}
        placeholder="Add a new task"
        placeholderTextColor={themes.colors.gray300}
        onFocus={focusedInputBorderColor}
        onBlur={blurredInputBorderColor}
        onChangeText={todoHandler}
        value={enteredTodo}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={sendTodo}
      >
        <Plus />
      </TouchableOpacity>
    </View>
  );
};
