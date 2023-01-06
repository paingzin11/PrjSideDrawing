import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useCallback} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import HomeScreen from './Screens/Home';
import DeScreen from './Screens/Detail';
import NotiScreen from './Screens/Notification';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

const Drawer = createDrawerNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'MyanmarFonts': require('./assets/fonts/NotoSansMyanmar-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Detail Screen" component={DeScreen} initialParams={{body:"", title:"", rating:""}} />
        <Drawer.Screen name="Noti Screen" component={NotiScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
