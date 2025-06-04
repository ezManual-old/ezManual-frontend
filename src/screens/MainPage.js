import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainPage() {
  return (
    <SafeAreaView>
      <View className="flex justify-between w-full max-w-md mt-4">
        <TouchableOpacity className="bg-orange-500 text-white font-bold py-4 px-12 rounded-2xl shadow">
          <Text className="text-white font-bold">저장소!</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-orange-500 text-white font-bold py-4 px-12 rounded-2xl shadow">
          <Text className="text-white font-bold">설정!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}