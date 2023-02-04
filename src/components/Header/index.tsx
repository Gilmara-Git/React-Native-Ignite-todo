import { View, Image } from "react-native";
import styles from "./styles";
import Rocket from "../../assets/rocket.svg";
import To from "../../assets/to.svg";
import Do from "../../assets/do.svg";

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rocket}>
        <Rocket />
      </View>
      <View style={styles.toDo}>
        <View style={styles.to}>
          <To />
        </View>
        <View style={styles.do}>
          <Do />
        </View>
      </View>
    </View>
  );
};
