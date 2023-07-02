import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, TextInput, StyleSheet, Text, View, Pressable, } from 'react-native';


const image = { uri: 'https://blog.logrocket.com/wp-content/uploads/2021/07/build-ios-app-react-native.png' };
export default function App() {
    const [name, setName] = useState('ATIQA');
    const [password, setPassword] = useState('atiqa19');
    return (
        <View style={styles.container}>
            <ImageBackground
                source={(image)}
                style={styles.image}
                resizeMode="cover"
                blurRadius={10}
            >
                <Text style={{ fontSize: 33, fontWeight: '600', paddingBottom: 22 }}>Login to your Account</Text>
                <Text style={{ fontSize: 15, paddingLeft: 22, fontWeight: 'bold', paddingTop: 12, textAlignVertical: 'top', color: '#003060' }}>Enter email</Text>
                <TextInput style={styles.input} placeholder='e.g. John'></TextInput>
                <Text style={{ fontSize: 15, paddingLeft: 22, fontWeight: 'bold', color: '#003060' }}>Enter password</Text>
                <TextInput style={styles.input} placeholder='e.g. 22'></TextInput>
                <Text style={{ color: '#003060', paddingLeft: 190, paddingBottom: 10 }}>Forgotten password</Text>
                <Pressable
                    onPressIn={() => { console.warn("press in") }}
                    onPressOut={() => { console.warn("press out") }}
                >
                    <Text style={styles.PressableBtn}> Login</Text>
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
    image: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 80,
        paddingVertical: 11,
        paddingStart: 4,
        paddingBottom: 400

    },
    input: {
        paddingLeft: 10,
        borderColor: "#87CEEB",
        borderLeftWidth: 3,
        backgroundColor: 'white',
        borderWidth: 1,
        margin: 10,
        width: 300,
        borderRadius: 10,
        height: 35,
        alignSelf: 'center',

    },
    PressableBtn: {
        padding: 8,
        backgroundColor: '#003060',
        borderWidth: 1,
        margin: 5,
        width: 100,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
    },
});
