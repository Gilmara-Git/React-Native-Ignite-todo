import AsyncStorage from '@react-native-async-storage/async-storage';
import { TODO_COLLECTION } from '../storage.config';
import { getAllTodoTasks } from './getAllTodoTasks';

export const removeStoredTodo = async(todoToDelete: string)=>{
    try{
        const storage = await getAllTodoTasks();
        const filteredTodoTasks = storage.filter((todo: string) => todo !== todoToDelete);     
        await AsyncStorage.setItem(TODO_COLLECTION, JSON.stringify(filteredTodoTasks));

    }catch(error){
        throw error;
    }
}