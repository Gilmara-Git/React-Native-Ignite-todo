import { Header } from "../../components/Header";
import { Statistics } from "../../components/Statistics";
import  {FallbackComponent } from '../../components/FallbackComponent';
import { DataEntry } from '../../components/DataEntry';
import { View  } from "react-native";
import styles from "./styles";
import themes from "../../themes/themes";


export const Home = () => {
  return (
    <>
      <Header />
      <View style={styles.lowerBody}>
       <DataEntry/>
      
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
