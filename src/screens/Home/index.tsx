import { Header } from '../../components/Header';
import { View , Text } from 'react-native';
import styles from './styles';

export const Home =()=>{
    return(<>
        <Header/>
        <View style={styles.lowerBody}>
            <Text style={{color: 'red'}}>ESTET</Text>
        </View>
    </>)
};