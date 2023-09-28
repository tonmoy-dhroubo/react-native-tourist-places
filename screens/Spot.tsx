import { View, Text, Image, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { ClockIcon, HeartIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { BGCOLOR, TEXTCOLOR } from '../theme';

const ios = Platform.OS == 'ios';
const topMargin = ios? '': 'mt-10';

export default function Spot(props: any) {
    const item = props.route.params;
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);

  return (
    <View className="flex-1 bg-white">
        {/* destination image */}
        <Image source={item.image} style={{width: wp(100), height: hp(55)}} />
        <StatusBar style={'light'} />

        {/* back button */}
        <SafeAreaView className={"flex-row justify-between items-center w-full absolute " + topMargin}>
            <TouchableOpacity
                onPress={()=> navigation.goBack()}
                className="p-2 ml-4 rounded-full"
                style={{backgroundColor: 'rgba(255,255,255,0.5)'}}
            >
                <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=> toggleFavourite(!isFavourite)}
                className="p-2 mr-4 rounded-full"
                style={{backgroundColor: 'rgba(255,255,255,0.5)'}}
            >
                <HeartIcon size={wp(7)} strokeWidth={4} color={isFavourite? "red": "white"} />
            </TouchableOpacity>
        </SafeAreaView>

        {/* title & descritpion & booking button */}
        <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} className="flex justify-between flex-1 px-5 pt-8 bg-white -mt-14">
            <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
                <View className="flex-row items-start justify-between">
                    <Text style={{fontSize: wp(7)}} className="flex-1 font-bold text-neutral-700">
                        {item?.title}
                    </Text>
                    <Text style={{fontSize: wp(7), color: TEXTCOLOR}} className="font-semibold">
                        $ {item?.price}
                    </Text>
                </View>
                <Text style={{fontSize: wp(3.7)}} className="mb-2 tracking-wide text-neutral-700">{item?.longDescription}</Text>
                <View className="flex-row justify-between mx-1">
                    <View className="flex-row items-start space-x-2">
                        <ClockIcon size={wp(7)} color="skyblue" />
                        <View className="flex space-y-2">
                            <Text style={{fontSize: wp(4.5)}} className="font-bold text-neutral-700">{item.duration}</Text>
                            <Text className="tracking-wide text-neutral-600">Duration</Text>
                        </View>
                    </View>
                    <View className="flex-row items-start space-x-2">
                        <MapPinIcon size={wp(7)} color="#f87171" />
                        <View className="flex space-y-2">
                            <Text style={{fontSize: wp(4.5)}} className="font-bold text-neutral-700">{item.distance}</Text>
                            <Text className="tracking-wide text-neutral-600">Distance</Text>
                        </View>
                    </View>
                    <View className="flex-row items-start space-x-2">
                        <SunIcon size={wp(7)} color="orange" />
                        <View className="flex space-y-2">
                            <Text style={{fontSize: wp(4.5)}} className="font-bold text-neutral-700">{item.weather}</Text>
                            <Text className="tracking-wide text-neutral-600">Sunny</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={{backgroundColor: BGCOLOR , height: wp(15), width: wp(50)}} className="flex items-center justify-center mx-auto mb-6 rounded-full">
                <Text className="font-bold text-white" style={{fontSize: wp(5.5)}}>Book now</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}