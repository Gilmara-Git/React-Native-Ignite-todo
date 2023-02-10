import { StyleSheet } from 'react-native';
import themes from '../../themes/themes';

const styles = StyleSheet.create({
    inputButtonHolder:{
        transform: [{translateY: -30}],
        flexDirection: 'row',
        
    },
    input:{
        height: 54,
        width: 241,
        backgroundColor: themes.colors.gray700Desc_2,
        fontSize: 16,
        fontFamily: themes.fonts.InterRegular400,
        padding: 15,
        borderRadius: 6,
        color: themes.colors.gray100,
        borderWidth: 1,
        
    },
    button:{
        height: 52,
        width: 52,
        backgroundColor: themes.colors.blueDarkButton,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8
    }
})

export default styles;