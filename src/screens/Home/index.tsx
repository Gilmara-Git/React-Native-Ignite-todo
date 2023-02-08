import { Header } from "../../components/Header";
import { Statistics } from "../../components/Statistics";
import  {FallbackComponent } from '../../components/FallbackComponent';
import { TodoItem } from '../../components/TodoItem';
import { DataEntry } from '../../components/DataEntry';
import { View  , FlatList, Alert } from "react-native";
import styles from "./styles";
import themes from "../../themes/themes";
import { useState } from 'react';



export const Home =()=> {
const [todoList, setTodoList ] = useState<string[]>([])

  // const todoList = [
  //   'Select at least 10 books related to programming languages ', 
  //    'Read the entire React Navigation documentation and practice it', 
  //    'Learn the difference between FlatList and ScrollView and their pros', 
  //    'Learn and practice the useState and useEffect hooks', 
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //     'eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //     'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla'

  //   ]
const getTodoHandler =(todo:string)=>{
  if(todoList.includes(todo)){
    return Alert.alert('This todo has already been registered')
  }
setTodoList(prevState => [...prevState, todo])
}

    
   return (
    <>
      <Header />
      <View style={styles.lowerBody}>
       <DataEntry onAddTodo={getTodoHandler}/>
             
        <View style={styles.statisticsHolder}>
          <Statistics
            statisticName="Created"
            statisticNumber={todoList.length}
            StatisticColor={themes.colors.blueDarkButton}
          />

          <Statistics
            statisticName="Concluded"
            statisticNumber={0}
            StatisticColor={themes.colors.purple}
          />
        </View>

        <FlatList 
        keyExtractor={item=>item}
        data={todoList}
        renderItem={({item})=>(
          <TodoItem todo={item} />
        )}
        ListEmptyComponent={
          <FallbackComponent/>
        }
        />
       
      </View>
    </>
  );
};
