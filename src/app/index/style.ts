import { StyleSheet } from "react-native"

import { colors } from "@/styles/colors"

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    title: {
        color: colors.green[900],
        fontSize: 22,
    }

})