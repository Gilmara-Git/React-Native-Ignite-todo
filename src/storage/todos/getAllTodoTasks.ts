import AsyncStorage from "@react-native-async-storage/async-storage";
import { TODO_COLLECTION } from "../storage.config";

export const getAllTodoTasks = async()=>{

    try{
        const storedTodoList = await AsyncStorage.getItem(TODO_COLLECTION);
        const currentTodoList = storedTodoList ? JSON.parse(storedTodoList) : [];       
        return currentTodoList;

    }catch(error){
        throw error;
    }
};