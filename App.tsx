/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { className } from "nativewind/types";

function Home() {
  const ui = (
    
    <SafeAreaView className="bg-[#000000] flex-1">
      <ImageBackground className="absolute h-full w-full" source={require("./assets/bg.png")}>
      <StatusBar hidden={true} />
      <View className="p-8 pt-24">
        <Text style={styles.container} className="text-white text-start text-[20px]">
          Welcome back, <Text className="font-bold">Zijja</Text>
          <Text>🤙</Text>
        </Text>
      </View>
      </ImageBackground>
      <ScrollView className="h-fulll mt-20 flex-grow flex-col">
        <View className="bg-white mt-20 flex-grow rounded-t-[40px] flex-col justify-between items-center">
          <View className="bg-[#E5E6E9] h-[5px] w-[109px] mt-[15px] mb-[15px] rounded-full"></View>
          {/* item */}
          <View className="flex flex-row  p-4 border-b-2 border-gray-100 mx-4 justify-center items-center">
              <View className="absolute top-3 left-3 rounded-full w-6 h-6 bg-black z-50 justify-center items-center">
              <Text className=" font-extrabold text-[14px]   text-white text-center">3</Text>
              </View>
            <Image
              source={{
                uri:
                  "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
              }}
              className="h-[59px] w-[59px] rounded-full justify-start items-start mr-6"
            />
            
            <View className="flex flex-1 flex-col">
              <View className="flex flex-col">
                <Text className="text-[15px] mt-2 font-bold mb-2">
                  Nethmi Niwarthana
                </Text>
                <Text className="text-[14px] font-medium text-[#8A91A8]">
                  Ok, Sure!
                </Text>
              </View>
            </View>
            <View>
              <View className="text-[14px] text-end text-[#8A91A8] flex flex-col justify-end items-end">
                <Text className="mb-2 text-[#8A91A8]">11:42 AM</Text>
                <Image
                  className="h-[17px] w-[17px] justify-end items-end"
                  source={{
                    uri:
                      "https://cdn1.iconfinder.com/data/icons/freeline/32/accept_check_ok_outline_tick_yes-512.png",
                  }}
                />
              </View>
            </View>
          </View>
          {/* item */}
        </View>
        <View className="w-full flex-grow bg-white min-h-full"></View>
      </ScrollView>
      <View className="bg-white flex flex-row justify-between items-end fixed bottom-0 px-4">
        <TouchableOpacity className=" bg-[#FFCB45] h-14 w-14 border-2 border-gray-200 rounded-full mr-3 items-center justify-center mb-4 mt-4">
        <Image
            className="h-7 w-7"
            source={{
              uri:
                "https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/search-3-512.png",
            }}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          className="h-14 border-2  border-gray-200 rounded-[30px] mb-4 mt-4 flex-1 p-4  text-[16px] pr-10"
        ></TextInput>
        <TouchableOpacity>
          <Image
            className="h-7 w-7 opacity-60 absolute bottom-8 right-4"
            source={{
              uri:
                "https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/search-3-512.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  );
  return ui;
}

const styles = StyleSheet.create({
  container:{
    fontFamily: 'Inter'
  }
});

export default Home;
