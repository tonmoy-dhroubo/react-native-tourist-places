import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { destinationData } from "../constants";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function Featured() {
    const navigation = useNavigation();
    return (
        <View className="flex-row flex-wrap justify-between mx-4">
            {destinationData.map((item, index) => {
                return (
                    <FeaturedItem
                        navigation={navigation}
                        item={item}
                        key={index}
                    />
                );
            })}
        </View>
    );
}

const FeaturedItem = ({ item, navigation }: any) => {
    const [isFavourite, toggleFavourite] = useState(false);
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Spot", { ...item })}
            style={{ width: wp(44), height: wp(65) }}
            className="relative flex justify-end p-4 py-6 mb-5 space-y-2"
        >
            <Image
                source={item.image}
                style={{ width: wp(44), height: wp(65), borderRadius: 35 }}
                className="absolute"
            />

            <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.8)"]}
                style={{
                    width: wp(44),
                    height: hp(15),
                    borderBottomLeftRadius: 35,
                    borderBottomRightRadius: 35,
                }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                className="absolute bottom-0"
            />

            <TouchableOpacity
                onPress={() => toggleFavourite(!isFavourite)}
                style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
                className="absolute p-3 rounded-full top-1 right-3"
            >
                <HeartIcon size={wp(5)} color={isFavourite ? "red" : "white"} />
            </TouchableOpacity>

            <Text
                style={{ fontSize: wp(4) }}
                className="font-semibold text-white"
            >
                {item.title}
            </Text>
            <Text style={{ fontSize: wp(2.2) }} className="text-white">
                {item.shortDescription}
            </Text>
        </TouchableOpacity>
    );
};
