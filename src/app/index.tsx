import { Text, View, StyleSheet} from "react-native"
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors"

export default function Index(){
    return(
    <view style={style.container}>
        <Text style={style.title}>Hell react native!</Text>
    </view>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    title: {
        color: "red",
        fontSize: 22,
    }

})