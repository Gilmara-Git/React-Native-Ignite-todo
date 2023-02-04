// import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';
import { Home } from './src/screens/Home';
import { LinearGradientBackground } from './src/screens/LinearGradientBackground';
import themes from './src/themes/themes';
import styles from './src/screens/Home/styles';

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
      {/* <LinearGradientBackground /> */}
      <Home/>
       
    </SafeAreaView>
   
  );
}

