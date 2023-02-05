import { Header } from "../../components/Header";
import { Statistics } from "../../components/Statistics";
import  {FallbackComponent } from '../../components/FallbackComponent';
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import themes from "../../themes/themes";
import Plus from "../../assets/plus.svg";

export const Home = () => {
  return (
    <>
      <Header />
      <View style={styles.lowerBody}>
        <View style={styles.inputButtonHolder}>
          <TextInput
            style={styles.input}
            placeholder="Add a new task"
            placeholderTextColor={themes.colors.gray300}
          />
          <TouchableOpacity activeOpacity={0.7} style={styles.button}>
            <Plus />
          </TouchableOpacity>
        </View>

        <View style={styles.statisticsHolder}>
          <Statistics
            statisticName="Created"
            statisticNumber={0}
            StatisticColor={themes.colors.blueDarkButton}
          />

          <Statistics
            statisticName="Concluded"
            statisticNumber={0}
            StatisticColor={themes.colors.purple}
          />
        </View>
        
         <FallbackComponent/>
       
      </View>
    </>
  );
};
