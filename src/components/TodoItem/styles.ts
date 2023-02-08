import { StyleSheet } from 'react-native';
import themes from '../../themes/themes';

const styles =  StyleSheet.create({
    todoContainer:{
        flexDirection: 'row',
        backgroundColor: themes.colors.gray700Desc_2,
        height: 64,
        width: 327,
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal:8,
        borderWidth: 1,
        borderColor: themes.colors.gray400,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
        marginTop: 20

    },
    checkView:{
        height: 15, 
        width: 15, 
        borderWidth: 2, 
        borderColor: themes.colors.blueDarkButton,
        borderRadius: 50
    },
     todoHolder:{
        width: 235,
        alignItems: 'center',
        justifyContent: 'center'
     },
     todoDescription:{
        color: themes.colors.gray100,
        fontSize: 14,
        
     }

});

export default styles;