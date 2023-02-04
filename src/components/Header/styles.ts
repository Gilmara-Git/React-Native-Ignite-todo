import { StyleSheet } from 'react-native';
import themes from '../../themes/themes';


const styles = StyleSheet.create({
    container:{     
        backgroundColor: themes.colors.gray700,
        height: 175,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rocket:{
        width: 19,
        height: 31,
        marginRight:10
    },
    toDo:{
        flexDirection: 'row',
    },
    to:{
        width: 34,
        height: 24,
    },
    do:{
        width: 42,
        height: 26,
        marginLeft: 7  
    }
   
})

export default styles;