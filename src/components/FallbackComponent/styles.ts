import { StyleSheet } from 'react-native';
import themes from '../../themes/themes';

const styles  = StyleSheet.create({
    fallbackContainer:{
        marginTop: 20,
        width:'100%',      
    },
    emptyList:{
       alignItems: 'center' ,
       marginTop:40
       
    },
    clipboard:{
        marginBottom: 20
    },
    topText:{
        color: themes.colors.gray300,
        fontFamily: themes.fonts.InterBold700,
        fontSize:14
    },
    bottomText:{
        color: themes.colors.gray300,
        fontFamily: themes.fonts.InterRegular400,
        fontSize:14
    },
    lineMargin:{
        backgroundColor:themes.colors.gray400, 
        height: 1.5,
        
    }
    
});

export default styles;