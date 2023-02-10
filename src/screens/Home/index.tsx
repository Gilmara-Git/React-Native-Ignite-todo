import { Header } from "../../components/Header";
import { Statistics } from "../../components/Statistics";
import  {FallbackComponent } from '../../components/FallbackComponent';
import { TodoItem } from '../../components/TodoItem';
import { DataEntry } from '../../components/DataEntry';
import { View  , FlatList, Alert, Text } from "react-native";
import styles from "./styles";
import themes from "../../themes/themes";
import { useEffect, useState } from 'react';



export const Home =()=> {
const [todoList, setTodoList ] = useState<string[]>([]);
const [ completedTodoList, setCompleteTodoList ] = useState<string[]>([]);
// const [ isCompleted, setIsCompleted ] = useState(false);


const addTodoHandler =(todo:string)=>{
  if(!todo.trim()){
    return Alert.alert('Please enter a valid "todo" to your list.')
  }
  if(todoList.includes(todo)){
    return Alert.alert('This todo has already been registered')
  }
setTodoList(prevState => [...prevState, todo])
}

const removeTodoHandler =(todo: string)=>{
  Alert.alert('Remove Todo',`Do you want to delete "${todo.toUpperCase()}" from your "todo" list ?`, [
    {
      text: 'Yes',
      onPress: ()=>{
        setTodoList(prevState => prevState.filter(item => item !== todo))
      },
      style: 'destructive'
    
  }, 
  {
    text: "Cancel",
    style: 'default'

  }
])

}

  
const toggleCompleteIncompleteTodo =(todo: string)=>{
 
  if(!completedTodoList.includes(todo)){
    setCompleteTodoList(prevState => [ ...prevState, todo ])
    // setIsCompleted(true)
 
  }else{  
    setCompleteTodoList(prevState => prevState.filter(item => item !== todo ))
    // setIsCompleted(false)
  }


}


   return (
    <>
      <Header />
      <View style={styles.lowerBody}>
       <DataEntry onAddTodo={addTodoHandler}/>
             
        <View style={styles.statisticsHolder}>
          <Statistics
            statisticName="Created"
            statisticNumber={todoList.length}
            StatisticColor={themes.colors.blueDarkButton}
          />

          <Statistics
            statisticName="Concluded"
            statisticNumber={completedTodoList.length}
            StatisticColor={themes.colors.purple}
          />
        </View>

        <FlatList 
        keyExtractor={item=>item}
        data={todoList}
        renderItem={({item})=>(
          <TodoItem
          isCompleted={completedTodoList.includes(item)} 
          todo={item} 
          onRemove={removeTodoHandler}
          onToggle={toggleCompleteIncompleteTodo}
          />
        )}
        ListEmptyComponent={
          <FallbackComponent/>
        }
        />

      </View>
    </>
  );
};
