import styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import Trash from "../../assets/trash.svg";
import Check from "../../assets/check.svg";
import themes from "../../themes/themes";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";

interface TodoItemProps {
  todo: string;
  onRemove: (todo: string) => void;
  onToggle: (todo: string) => void;
  isCompleted: boolean;
}

export const TodoItem = ({
  todo,
  onRemove,
  onToggle,
  isCompleted,
}: TodoItemProps) => {
  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => onToggle(todo)}>
        {isCompleted ? (
          <FontAwesome name="heart" size={20} color={themes.colors.blue} />
        ) : (
          // <Check />

          <View style={styles.checkView} />
        )}
      </TouchableOpacity>

      <View style={styles.todoHolder}>
        <Text
          style={[
            isCompleted
              ? {
                  textDecorationLine: "line-through",
                  color: themes.colors.gray300,
                }
              : styles.todoDescription,
          ]}
        >
          {todo}
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => onRemove(todo)}
        disabled={isCompleted}
      >
        {/* <Trash style={styles.trashIcon}/> */}
        <EvilIcons
          name="trash"
          size={24}
          color={isCompleted ? themes.colors.gray300 : themes.colors.purple}
        />
      </TouchableOpacity>
    </View>
  );
};
