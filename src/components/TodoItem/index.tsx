import styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import Trash from "../../assets/trash.svg";

interface TodoItemProps {
  todo: string;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
      >
        <View style={styles.checkView} />
      </TouchableOpacity>
      <View style={styles.todoHolder}>
        <Text style={styles.todoDescription}>{todo}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
      >
        <Trash />
      </TouchableOpacity>
    </View>
  );
};
