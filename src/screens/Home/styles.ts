import { StyleSheet } from 'react-native';
import themes from '../../themes/themes';


const styles =  StyleSheet.create({
    lowerBody:{
        flex: 1,
        backgroundColor: themes.colors.gray700Desc_1,
        paddingHorizontal: 23,
        marginBottom: 10,
        alignItems: 'center'
      
    },
    
    statisticsHolder:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
       
    },
  

})

export default styles;