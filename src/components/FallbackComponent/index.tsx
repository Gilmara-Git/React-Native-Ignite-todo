import { View, Text } from "react-native";
import styles from './styles';
import Clipboard from '../../assets/clipboard.svg'

export const FallbackComponent = () => {
  return (
    <>
    <View style={styles.fallbackContainer}>     
    <View style={styles.lineMargin}/>
      <View style={styles.emptyList}>
        <Clipboard style={styles.clipboard}/>
        <Text style={styles.topText}>You still do not have input tasks</Text>
        <Text style={styles.bottomText}>Create tasks and organize your todo items</Text>
      </View>
    </View>
    </>
  );
};
