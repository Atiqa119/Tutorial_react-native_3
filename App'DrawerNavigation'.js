import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
//  Add the dependencies of Drawer navigation
//1.npm install @react-navigation/drawer
//2.npx expo install react-native-gesture-handler react-native-reanimated
//  Add Reanimated's babel plugin to your babel.config.js
// 3.plugins: ['react-native-reanimated/plugin'],
const Drawer=createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Drawer.Navigator useLegacyImplementation initialRouteName='Welcome'>
        <Drawer.Screen name="Welcome" component={WelcomeScreen}/>
        <Drawer.Screen name="Logins" component={LoginScreen}/>
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
