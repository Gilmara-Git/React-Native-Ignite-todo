import styles from "./styles";
import { View, Text } from "react-native";

interface StatisticProps {
  statisticName: string;
  statisticNumber: number;
  StatisticColor: string;
}

export const Statistics = ({
  statisticName,
  statisticNumber,
  StatisticColor,
}: StatisticProps) => {
  return (
    <View style={styles.StatisticsContainer}>
      <Text style={[styles.name, { color: StatisticColor }]}>
        {statisticName}
      </Text>
      <View style={styles.numberLabel}>
        <Text style={styles.number}>{statisticNumber}</Text>
      </View>
    </View>
  );
};
