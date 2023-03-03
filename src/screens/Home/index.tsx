import styles from "./styles";
import themes from "../../themes/themes";
import { useEffect, useState } from "react";
import { View, FlatList, Alert, Text, TouchableOpacity } from "react-native";

import { Header } from "../../components/Header";
import { TodoItem } from "../../components/TodoItem";
import { DataEntry } from "../../components/DataEntry";
import { Statistics } from "../../components/Statistics";
import { FallbackComponent } from "../../components/FallbackComponent";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { createTodo } from '../../storage/todos/createTodo';
import { getAllTodoTasks } from '../../storage/todos/getAllTodoTasks';
import { removeStoredTodo } from '../../storage/todos/removeStoredTodo';

import  { AppError } from '../../utils/AppError';

export const Home = () => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [completedTodoList, setCompleteTodoList] = useState<string[]>([]);
  const [allTodosCompleted, setAllTodosCompleted] = useState(false);
  const [showCongratScreen, setShowCongratScreen] = useState(false);

  const fetchAllTodoTasks = async()=>{
    try{
      const allTasks = await getAllTodoTasks();
      setTodoList(allTasks);


    }catch(error){
      Alert.alert(error);
    }
  }
  
  const addTodoHandler = async (todo: string) => {
    if (!todo.trim()) {
      return Alert.alert('Please enter a valid "todo" to your list.');
    }
   
    try{
      await createTodo(todo);
      const updatedTodoTasks = await getAllTodoTasks();
      setTodoList(updatedTodoTasks);
    


    }catch(error){
      if(error instanceof AppError ){
         Alert.alert(error.message);
      }else{
        Alert.alert(error)
      }

    }
  };

  const removeTodo = async (todo: string)=>{
    try{
      await removeStoredTodo(todo);
      fetchAllTodoTasks();
     
    }catch(error){
      Alert.alert(error)
    }
  }
  const removeTodoHandler = (todo: string) => {
    Alert.alert(
      "Remove Todo",
      `Do you want to delete "${todo.toUpperCase()}" from your "todo" list ?`,
      [
        {
          text: "Yes",
          onPress: () => {removeTodo(todo)},
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "default",
        },
      ]
    );
 
  };

  const toggleCompleteIncompleteTodo = async(todo: string) => {
       if (!completedTodoList.includes(todo)) {
      setCompleteTodoList((prevState) => [...prevState, todo]);
    } else {
      setCompleteTodoList((prevState) =>
        prevState.filter((item) => item !== todo)
      );
    }
  };

  const closeCongratScreenHandler = () => {
    setShowCongratScreen(false);
  };

  

  useEffect(() => {
    if (todoList.length !== 0 && completedTodoList.length === todoList.length) {
      setAllTodosCompleted(true);
      setShowCongratScreen(true);
    }
  }, [todoList, completedTodoList]);

  useEffect(()=>{
    fetchAllTodoTasks();
  },[])
  
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
                <AntDesign
                  name="closecircleo"
                  size={20}
                  color={themes.colors.purple}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.completedTodosText}>
              Congratulations {"\n"} All Todos are completed !!
            </Text>
            <FontAwesome name="heart" color={themes.colors.blue} size={120} />
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
