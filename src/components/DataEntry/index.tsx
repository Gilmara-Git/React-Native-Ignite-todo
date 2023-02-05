import { View, TextInput, TouchableOpacity } from  'react-native';
import  { useState } from 'react';
import styles from './styles';
import themes from '../../themes/themes';
import Plus from "../../assets/plus.svg";

export const DataEntry =()=>{
    const [ inputFocusedColor , setInputFocusedColor ] = useState('');
    
    const focusedInputBorderColor =()=>{
        setInputFocusedColor(themes.colors.purple);
    }
    const blurredInputBorderColor =()=>{
        setInputFocusedColor('');
    }

    return (
        <View style={styles.inputButtonHolder}>
        <TextInput
          style={[styles.input , { borderColor: inputFocusedColor}]}
          placeholder="Add a new task"
          placeholderTextColor={themes.colors.gray300}
          onFocus={focusedInputBorderColor}
          onBlur={blurredInputBorderColor}
        />
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Plus />
        </TouchableOpacity>
      </View>
    )
}