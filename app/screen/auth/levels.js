import React from "react"
import { Text } from "react-native-paper"
import Background from "../../../features/Background"
import Button from "../../../features/Button"


export default function levels({ navigation }) {
    return (
        <Background>
            <Button mode="contained" onPress={() => navigation.navigate("Choose")} color='#F8772E'>
                Level 1
            </Button>
            <Button mode="contained" onPress={() => navigation.navigate("StartScreen")} color='#F8772E'>
                Level 2
            </Button>
            <Button mode="contained" onPress={() => navigation.navigate("StartScreen")} color='#F8772E'>
                Level 3
            </Button>
        </Background>

    )
}
