import { StatusBar } from 'expo-status-bar';
import {  ImageBackground, Pressable, StyleSheet, Text, View, } from 'react-native';

const image = {uri: 'https://blog.logrocket.com/wp-content/uploads/2021/07/build-ios-app-react-native.png'};
export default function App(props) {
  return (
    <View style={styles.container}>
       <ImageBackground 
                source={(image)} 
                style={styles.image}
                resizeMode="cover"
                blurRadius={5}
            >  
      <Text style={{fontWeight:'bold',fontStyle:'italic',paddingTop:12,paddingLeft:6,marginStart:50,fontSize:66,color:'#1c305c'}}>WELCOME!</Text>
      <Pressable style={styles.button} onPress={()=>props.navigation.navigate("Logins")}>
      <Text style={styles.title}>started now </Text>
    </Pressable>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    color:"blue",
    paddingVertical: 12,
    paddingHorizontal: 33,
    borderRadius: 16,
    elevation: 3,
    backgroundColor: '#1c305c',
    marginLeft:122,
    marginRight:88,
    marginVertical:33,
  },
  title:{
    color:'white',
    fontStyle:'italic',
    fontSize:20,
    fontWeight:'bold',
  },
  image: {
    flex: 1,
    justifyContent:'center',
    
  },
});
