import { StyleSheet } from 'react-native';
//Pre-requisites of navigations open terminal and type 1.npm install @react-navigation/native, npx expo install react-native-screens react-native-safe-area-context, npm install @react-navigation/native-stack
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';

const stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Welcome" component={WelcomeScreen}/>
        <stack.Screen name="Logins" component={LoginScreen}/>
    </stack.Navigator>
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
