import { Header } from "../../components/Header";
import { Statistics } from "../../components/Statistics";
import { FallbackComponent } from "../../components/FallbackComponent";
import { TodoItem } from "../../components/TodoItem";
import { DataEntry } from "../../components/DataEntry";
import { View, FlatList, Alert, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import themes from "../../themes/themes";
import { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

export const Home = () => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [completedTodoList, setCompleteTodoList] = useState<string[]>([]);
  const [allTodosCompleted, setAllTodosCompleted] = useState(false);
  const [ showCongratScreen , setShowCongratScreen ] = useState(false);

  const addTodoHandler = (todo: string) => {
    if (!todo.trim()) {
      return Alert.alert('Please enter a valid "todo" to your list.');
    }
    if (todoList.includes(todo)) {
      return Alert.alert("This todo has already been registered");
    }
    setTodoList((prevState) => [...prevState, todo]);
  };

  const removeTodoHandler = (todo: string) => {
    Alert.alert(
      "Remove Todo",
      `Do you want to delete "${todo.toUpperCase()}" from your "todo" list ?`,
      [
        {
          text: "Yes",
          onPress: () => {
            setTodoList((prevState) =>
              prevState.filter((item) => item !== todo)
            );
          },
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "default",
        },
      ]
    );
  };

  const toggleCompleteIncompleteTodo = (todo: string) => {
    if (!completedTodoList.includes(todo)) {
      setCompleteTodoList((prevState) => [...prevState, todo]);
    } else {
      setCompleteTodoList((prevState) =>
        prevState.filter((item) => item !== todo)
      );
    }
  };

  useEffect(() => {
    if (todoList.length !== 0 && completedTodoList.length === todoList.length) {
      setAllTodosCompleted(true);
      setShowCongratScreen(true);
    }
  }, [todoList, completedTodoList]);

  const closeCongratScreenHandler =()=>{
    setShowCongratScreen(false)
  }

  return (
    <>
      <Header />

      <View style={styles.lowerBody}>
        {allTodosCompleted && showCongratScreen ? (
          <View style={styles.completedTodosView}>
            <View style={styles.closeCompletedTodosButton}>
              <TouchableOpacity 
              activeOpacity={0.5}
              onPress={closeCongratScreenHandler}
              >
               <AntDesign name='closecircleo' size={20} color={themes.colors.purple}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.completedTodosText}>
              Congratulations {"\n"} All Todos are completed !!
            </Text>
            <FontAwesome name="heart" color={themes.colors.blue} size={120}/>
          </View>
        ) : (
          <>
            <DataEntry onAddTodo={addTodoHandler} />

            <View style={styles.statisticsHolder}>
              <Statistics
                statisticName="Created"
                statisticNumber={todoList.length}
                StatisticColor={themes.colors.blue}
              />

              <Statistics
                statisticName="Completed"
                statisticNumber={completedTodoList.length}
                StatisticColor={themes.colors.purple}
              />
            </View>

            <FlatList
              keyExtractor={(item) => item}
              data={todoList}
              renderItem={({ item }) => (
                <TodoItem
                  isCompleted={completedTodoList.includes(item)}
                  todo={item}
                  onRemove={removeTodoHandler}
                  onToggle={toggleCompleteIncompleteTodo}
                />
              )}
              ListEmptyComponent={<FallbackComponent />}
            />
          </>
        )}
      </View>
    </>
  );
};
