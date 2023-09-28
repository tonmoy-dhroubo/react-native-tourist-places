import { View, Text, Image, TouchableOpacity, } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View className="flex justify-end flex-1">
            {/* background image */}
            <Image
                source={require("../assets/images/welcome.png")}
                className="absolute w-full h-full"
            />

            {/* content & gradient */}
            <View className="p-5 pb-10 space-y-8">
                <LinearGradient
                    colors={["transparent", "rgba(3,105,161,0.8)"]}
                    style={{ width: wp(100), height: hp(60) }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    className="absolute bottom-0"
                />
                <View className="space-y-3">
                    <Text
                        className="text-5xl font-bold text-white"
                        style={{ fontSize: wp(10) }}
                    >
                        Traveling made easy!
                    </Text>
                    <Text
                        className="font-medium text-neutral-200"
                        style={{ fontSize: wp(4) }}
                    >
                        Experience the world's best adventure around the world
                        with us
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home" as never)}
                    className="p-3 px-12 mx-auto rounded-full bg-cyan-600"
                >
                    <Text
                        className="font-bold text-white"
                        style={{ fontSize: wp(5.5) }}
                    >
                        Start
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
