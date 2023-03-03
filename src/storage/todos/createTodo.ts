import AsyncStorage from '@react-native-async-storage/async-storage';
import { TODO_COLLECTION } from '../storage.config';
import { getAllTodoTasks } from './getAllTodoTasks'
import { Alert } from 'react-native';
import { AppError } from '../../utils/AppError';

export const createTodo = async(todo: string)=>{

    try{
        const storedTodoList = await getAllTodoTasks();   
        const hasTodo = storedTodoList.includes(todo);
        if(hasTodo){        
            throw new AppError(`The task ${todo} already exists!`);
           
        }
         
        const updatedTodoTasks = JSON.stringify([ ...storedTodoList, todo]);
        await AsyncStorage.setItem(TODO_COLLECTION, updatedTodoTasks);



    }catch(error){
        throw error;
    }
};