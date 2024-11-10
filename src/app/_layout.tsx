import { Stack } from "expo-router"

import { colors } from "@/styles/colors"

export default function layout() {
    return (
        <Stack 
            screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor:
            colors.gray[900] },
        }}
        />
    )
}