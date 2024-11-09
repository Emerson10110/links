import { Text, View, StyleSheet} from "react-native"
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors"

export default function Index(){
    return(
    <view>
        <Text style={{}}>Hell react native!</Text>
    </view>
    )
}

const style = StyleSheet.create({
    title: {
        color: "red",
        fontSize: 22,
    }

})