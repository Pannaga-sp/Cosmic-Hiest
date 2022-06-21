import React from 'react'
import {
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    View,
    Image,
} from 'react-native'
import Background from './Background'

const Create = () => {
    return (
        <View>
            <text
                style={{
                    fontFamily: 'Segoe UI',
                    fontSize: 35,
                    padding: 55,
                    backgroundColor: '#fff',
                    margin: 1,
                    marginLeft: 77,
                    marginRight: 77,
                    boxShadow: '5px 5px 3px #febe09',
                    borderRadius: '10px',
                    textAlign: 'center',
                }}
                selectable
            >
                <Image style={styles.logo} source={require('../assets/key.png')} />
                Create
            </text>
        </View>
    )
}

const Join = () => {
    return (
        <View>
            <text
                style={{
                    fontFamily: 'Segoe UI',
                    fontSize: 35,
                    padding: 55,
                    backgroundColor: '#fff',
                    margin: 30,
                    marginLeft: 77,
                    marginRight: 77,
                    boxShadow: '5px 5px 3px #febe09',
                    borderRadius: '10px',
                    textAlign: 'center',
                }}
                selectable
            >
                <Image style={styles.logo1} source={require('../assets/link.png')} />
                Join
            </text>
        </View>
    )
}

export default function StartScreen({ navigation }) {
    return (
        <Background>
            <View style={styles.container}>

                <TouchableOpacity
                    mode="outlined"
                    onPress={() => navigation.navigate('UserLogin')}
                >
                    <Create />
                </TouchableOpacity>
                <TouchableOpacity
                    mode="outlined"
                    onPress={() => navigation.navigate('Registration')}
                >
                    <Join />
                </TouchableOpacity>

            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    logo: {
        height: '83px',
        width: '74px',
        marginLeft: '41px',
        justifyContent: 'center',
    },
    logo1: {
        height: '73px',
        width: '74px',
        marginLeft: '41px',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
})
