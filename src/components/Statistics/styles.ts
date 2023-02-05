import { StyleSheet } from 'react-native';
import themes from '../../themes/themes';

const styles = StyleSheet.create({
    StatisticsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    name:{
        fontSize:14,
        fontFamily: themes.fonts.InterBold700,
        marginRight: 10
    },
    numberLabel:{
        backgroundColor: themes.colors.gray400,
        width: 30,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30
    },
    number:{
        color: themes.colors.gray200,
        fontSize:12,
        fontFamily: themes.fonts.InterBold700,
    },

});

export default styles;
