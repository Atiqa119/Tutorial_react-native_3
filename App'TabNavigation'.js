import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// Install tab navigation dependency in terminal
// npm install @react-navigation/bottom-tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';

const Tab=createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={({route})=>({
          tabBarIcon: ({focused,color,size})=>{
            let iconName;
            if (route.name==='Welcome'){
              iconName='ios-home';

            } else if (route.name==='Logins'){
              iconName='log-in';
            }
            return <Ionicons name={iconName} size={size} color={color}/>
          },
          tabBarActiveTintColor:'#1c305c',
          tabBarInactiveTintColor:'gray',
        })}>
        <Tab.Screen name="Welcome" component={WelcomeScreen}/>
        <Tab.Screen name="Logins" component={LoginScreen}/>
        </Tab.Navigator>
    
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
