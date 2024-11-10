import { StyleSheet } from "react-native"

import { colors } from "@/styles/colors"

export const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 62,
    },
    title: {
        color: colors.green[900],
        fontSize: 22,
    },
    header: {
        paddingHorizontal: 24,
     },
    logo: {
       height: 32,
       width: 38, 
    },
})