import { View, Image, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { style } from "./style"
import { colors } from "@/styles/colors"

import { Category } from "@/components/category"
import React from "react"

export default function Index() {
    return (
        <view style={style.container}>
           <View style={style.header}>
                <Image source={require("@/assets/logo.png")} style={style.logo} />

                <TouchableOpacity activeOpacity={0.3}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
           </View>

           <Category />
        </view>
    )
}
