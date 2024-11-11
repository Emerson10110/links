import { Text, Pressable } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"


import { Colors } from "react-native/Libraries/NewAppScreen"
import { styles } from "./styles"


export function Category() {
    return (
        <Pressable style={styles.container}>
            <MaterialIcons name="code" size={16} color={Colors.gray[400]} />
            <text style={styles.name}>Progetos</text>
        </Pressable>
    )
}