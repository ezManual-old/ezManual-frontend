import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainPage() {
  return (
    <SafeAreaView className="flex-1 items-center justify-between pt-10 pb-12 bg-white">
      <View className="flex-row justify-center w-full max-w-md px-4 gap-x-4">
        <TouchableOpacity className="bg-orange-500 py-6 px-5 rounded-2xl shadow w-1/2">
          <Text className="text-white font-bold text-lg text-center">
            저장소
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-orange-500 py-6 px-5 rounded-2xl shadow w-1/2">
          <Text className="text-white font-bold text-lg text-center">설정</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-16">
        <Text className="text-stonecolor-950 text-lg mb-2 text-left">
          쉬운 사용자 매뉴얼 생성기
        </Text>
        <Text className="text-stonecolor-950 font-extrabold text-black text-8xl">
          ezManual
        </Text>
      </View>
      <View className="space-y-4 items-center">
        <TouchableOpacity className="bg-orange-500 rounded-2xl py-4 px-10 items-center mb-4">
          <Text className="text-base text-white mb-1">매뉴얼 만들기</Text>
          <Text className="text-4xl font-bold text-white w-48 text-center">
            START
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#585C6B] py-4 px-10 rounded-2xl">
          <Text className="text-white text-2xl font-bold w-48 text-center">
            종 료
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
