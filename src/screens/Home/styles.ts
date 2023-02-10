import { StyleSheet } from 'react-native';
import themes from '../../themes/themes';


const styles =  StyleSheet.create({
    lowerBody:{
        flex: 1,
        backgroundColor: themes.colors.gray700Desc_1,
        paddingHorizontal: 23,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
      
    },
    completedTodosView:{
        backgroundColor: themes.colors.gray400,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        borderRadius: 24
    
    },
    completedTodosText:{
        fontFamily: themes.fonts.InterRegular400,
        textAlign: 'center',
        fontSize: 20,
        color: themes.colors.gray300,
        marginBottom: 20
    },
    closeCompletedTodosButton:{
       alignItems: 'flex-end',
        width: '100%'

        
    },
    closeButtonText:{
        color: themes.colors.purple,
        fontSize: 12,
        fontFamily:themes.fonts.InterRegular400,

    },
    statisticsHolder:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
       
    },
   
})

export default styles;