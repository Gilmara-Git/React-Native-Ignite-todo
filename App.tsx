import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';
import { Home } from './src/screens/Home';
import themes from './src/themes/themes';


export default function App() {
  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  if(!fontsLoaded){
    return <View><Text>Create the Loading component with the activityIndicator</Text></View>
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: themes.colors.gray700}}>
  
      <StatusBar barStyle="light-content" backgroundColor='transparent'
        translucent
      />

      <Home/>
       
    </SafeAreaView>
   
  );
}

