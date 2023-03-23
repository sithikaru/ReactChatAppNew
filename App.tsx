/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { useRef } from "react";
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
  FlatList,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { className } from "nativewind/types";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';

launchImageLibrary(options?, callback)

// You can also use as a promise without 'callback':
const result = await launchImageLibrary(mediaType:);
const item = [
  {
    pic: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
    name: "Nethu Niwarthana Rathnayaka",
    msg: "Good Morning!",
    count: "2",
    time: "09.24.AM",
  },
  {
    pic: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
    name: "Sahan Perera",
    msg: "Mchn! eka maru",
    count: "6",
    time: "07.45.AM",
  },
];

const chatHistory = [
  {
    msg: "Ane mnd bn meka hri yaida dn na",
    time: "2:04 PM",
    side: "income",
    status: "seen",
  },
  {
    msg: "Badu hari cuddh",
    time: "2:06 PM",
    side: "sent",
    status: "seen",
  },
  {
    msg: "Thawa eka msg ekak dapn!",
    time: "2:08 PM",
    side: "income",
    status: "seen",
  },
  {
    msg: "wade sure kr gnna",
    time: "2:08 PM",
    side: "income",
    status: "seen",
  },
  {
    msg: "Wada wada blnn deyk na",
    time: "2:10 PM",
    side: "sent",
    status: "seen",
  },
];

function Home() {
  const ui = (
    <SafeAreaView className="bg-[#000000] flex-1">
      <ImageBackground
        className="absolute h-full w-full"
        source={require("./assets/bg.png")}
      ></ImageBackground>
      <View className="p-8 ">
        <Text className="text-white flex-row text-start text-[20px]">
          Welcome back,
          <Text className="font-bold text-white text-star text-2xl">
            {" "}
            Zijja{" "}
          </Text>
          <Text>🌙</Text>
        </Text>
      </View>

      <ScrollView className="h-fulll rounded-t-[40px]  flex-grow flex-col">
        <View className="bg-white mt-20 flex-grow rounded-t-[40px] flex-col justify-between items-center">
          <View className="bg-[#E5E6E9] h-[5px] w-[109px] mt-[15px] mb-[15px] rounded-full"></View>
          <FlatList data={item} renderItem={itemUI} />
        </View>
        <View className="w-full flex-grow bg-white min-h-full"></View>
      </ScrollView>
      <View className="bg-white flex flex-row justify-between items-end fixed bottom-0 px-4">
        <TouchableOpacity className=" bg-[#FFCB45] absolute bottom-1 h-12 left-5 w-12 border-2 border-gray-200 rounded-full mr-3 items-center justify-center mb-4 mt-4">
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
          className="h-14 border-2  border-gray-200 rounded-[30px] mb-4 mt-4 flex-1 p-4  text-[16px] pr-10 pl-14"
          placeholderTextColor={"#000000"}
        ></TextInput>
        <TouchableOpacity>
          <Image
            className="h-16 w-16  absolute bottom-3 right-0"
            source={require("./assets/plus.png")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
  return ui;
}
function itemUI({ item }) {
  const itemui = (
    <View className="flex flex-row gap-5  p-4 border-b-2 border-gray-100 ">
      <Image
        source={{
          uri: item.pic,
        }}
        className="h-[59px] w-[59px] rounded-full justify-start items-start"
      />

      <View className=" mb-2 flex-col overflow-hidden" style={{ width: "48%" }}>
        <Text className="text-[16px] flex flex-grow overflow-hidden">
          {item.name}
        </Text>
        <Text className="text-[14px] font-medium text-[#8A91A8]">
          {item.msg}
        </Text>
      </View>

      <View>
        <View className="text-[14px] text-end text-[#8A91A8] flex flex-col justify-end items-end">
          <Text className="mb-2 right-0 text-[#8A91A8]">{item.time}</Text>
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
  );
  return itemui;
}

function Chat() {
  const scrollViewRef = useRef();
  const ui = (
    <SafeAreaView className="bg-[#000000] flex-1">
      <ImageBackground
        className="absolute h-full w-full"
        source={require("./assets/bg.png")}
      ></ImageBackground>
      <StatusBar hidden={true} />
      <View className="pt-4 px-8 flex flex-row">
        <Image
          source={{
            uri: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
          }}
          className="h-[59px] mr-4 w-[59px] rounded-full justify-start items-start"
        />

        <View className=" flex-col overflow-hidden" style={{ width: "70%" }}>
          <Text className="text-[16px] font-medium flex flex-grow text-white overflow-hidden">
            Nethmi Niwarthana
          </Text>
          <Text className="text-[16px] font-medium text-[#FFFFFF]">Online</Text>
        </View>
        <View>
          <TouchableOpacity className=" justify-center items-center">
            <Image source={require("./assets/dots.png")} className="w-7 h-7" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        className="h-fulll mt-1 flex-col max-h-full rounded-t-[40px]"
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        <View>
          <View className="bg-white mt-10 rounded-t-[40px] flex-col justify-between pt-5 px-5">
            <FlatList data={chatHistory} renderItem={ChatItem} />
          </View>
        </View>
        <View className="w-full flex-grow bg-white min-h-full"></View>
      </ScrollView>
      <View className="bg-white flex flex-row justify-between items-end fixed bottom-0 px-4 ">
        <View className="border-2  border-gray-200 rounded-full flex-1 py-2 mb-3 ">
          <TouchableOpacity className=" bg-[#FFCB45] h-12 w-12 border-2 absolute border-gray-200 rounded-full mr-3 items-center justify-center bottom-1 left-1">
            <Image className="h-5 w-5" source={require("./assets/plus.png")} />
          </TouchableOpacity>
          <TextInput
            placeholder="Type Message"
            className="h-10 text-[14px] pl-16 pr-14"
            placeholderTextColor={"#000000"}
          ></TextInput>
          <TouchableOpacity className="  h-12 w-12  absolute rounded-full  items-center justify-center bottom-1 right-1">
            <Image className="h-8 w-8" source={require("./assets/send.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
  return ui;
}

function ChatItem({ item }) {
  const chatui = (
    <View>
      <View>
        <View
          className="rounded-full  mt-1 py-3 px-5 left-0 bottom-0"
          style={item.side == "sent" ? styles.sent : styles.income}
        >
          <Text>{item.msg}</Text>
        </View>
        <Text
          style={item.side == "sent" ? styles.sentTime : styles.incomeTime}
          className="text-[#8A91A8] text-xs"
        >
          12:15 PM
        </Text>
      </View>
    </View>
  );
  return chatui;
}

function Welcome() {
  const ui = (
    <SafeAreaView className="bg-black">
      <StatusBar hidden={true} />
      <View className="w-full flex h-full ">
        <Image
          source={require("./assets/men.png")}
          className="min-w-full max-h-[40%] rounded-t-[60px]"
        ></Image>
        <View>
          <View className="mx-[30px] mt-7 ">
            <Text className="text-white text-[36px]  font-extrabold">
              Stay connected with your friends and family
            </Text>
            <View className="flex flex-row">
              <Image
                source={require("./assets/tik.png")}
                className="w-6 h-6 mt-6"
              />
              <Text className="text-white font-semibold text-[16px] mt-6 ml-2">
                Secure, private messaging
              </Text>
            </View>
          </View>
          <View className="min-h-[10%]"></View>
          <View className="justify-center">
            <TouchableOpacity className="bg-white mx-auto mt-auto h-16 w-[80%] bottom-0 rounded-full align-middle justify-center">
                <Text className="text-black font-bold text-[16px] text-center">Get Started</Text>
            </TouchableOpacity >
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
  return ui;
}
function LogIN() {
  const ui = (
    <SafeAreaView className="bg-black">
      <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
      <StatusBar hidden={true} />
      <View className="w-full flex h-full ">
        <Image
          source={require("./assets/men.png")}
          className="min-w-full max-h-[40%] rounded-t-[60px]"
        ></Image>
        <View>
          <View className="mx-[30px] mt-7 ">
            
            <View className="flex flex-row">
              <Image
                source={require("./assets/tik.png")}
                className="w-6 h-6 mt-6"
              />
              <Text className="text-white font-semibold text-[16px] mt-6 ml-2">
                Secure, private messaging
              </Text>
            </View>
            
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
            <View className="bg-white rounded-full mt-5  py-2 mb-3 ">
            <TextInput
            placeholder="Phone"
            keyboardAppearance="dark"
            keyboardType="number-pad"
            className="h-14 text-[20px] pl-16 pr-14"
            placeholderTextColor={"#000000"}
          ></TextInput>
          <View className="  h-12 w-12  absolute rounded-full  items-center justify-center bottom-3 left-2">
            <Image className="h-8 w-8" source={require("./assets/phone.png")} />
          </View>
            </View>
            <View className="bg-white rounded-full  py-2 mb-3 ">
            <TextInput
            keyboardAppearance="dark"
            keyboardType="default"
            placeholder="Password"
            className="h-14 text-[20px] pl-16 pr-14"
            placeholderTextColor={"#000000"}
            secureTextEntry={true}
          ></TextInput>
          <View className="  h-12 w-12  absolute rounded-full  items-center justify-center bottom-3 left-2">
            <Image className="h-8 w-8" source={require("./assets/password.png")} />
          </View>
            </View>
            <View className="flex flex-row mx-auto">
            <Text className="text-white font-semibold text-[16px] text-center mt-2">
            Do not have a account? 
              </Text>
              <TouchableOpacity><Text className="text-blue-400 mt-2 font-semibold text-[16px] text-center justify-center align-middle"> Signup!</Text></TouchableOpacity>
              </View>
              </KeyboardAvoidingView>
              
          </View>
          <View className="min-h-[5%]"></View>
          <View className="justify-center">
            <TouchableOpacity className="bg-white mx-auto mt-auto h-16 w-[80%] bottom-0 rounded-full align-middle justify-center">
                <Text className="text-black font-bold text-[16px] text-center">Login</Text>
            </TouchableOpacity >
          </View>
        </View>
        
      </View>
      </View>
      </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
  return ui;
}

function SignUP() {
  const ui = (
    <SafeAreaView className="bg-black">
      <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
      <StatusBar hidden={true} />
      <View className="w-full flex h-full ">
        <Image
          source={require("./assets/men.png")}
          className="min-w-full max-h-[40%] rounded-t-[60px]"
        ></Image>
        
        <View>
          <View className="mx-[30px] mt-7 ">
            
            <View className="flex flex-row">
              <Image
                source={require("./assets/tik.png")}
                className="w-6 h-6 mt-6"
              />
              <Text className="text-white font-semibold text-[16px] mt-6 ml-2">
                Secure, private messaging
              </Text>
            </View>
            
            <View className="bg-white rounded-full mt-5  py-2 mb-3 ">
            <TextInput
            placeholder="Phone"
            keyboardAppearance="dark"
            keyboardType="number-pad"
            className="h-14 text-[20px] pl-16 pr-14"
            placeholderTextColor={"#000000"}
          ></TextInput>
          <View className="  h-12 w-12  absolute rounded-full  items-center justify-center bottom-3 left-2">
            <Image className="h-8 w-8" source={require("./assets/phone.png")} />
          </View>
            </View>
            <View className="bg-white rounded-full  py-2 mb-3 ">
            <TextInput
            keyboardAppearance="dark"
            keyboardType="default"
            placeholder="Password"
            className="h-14 text-[20px] pl-16 pr-14"
            placeholderTextColor={"#000000"}
            secureTextEntry={true}
          ></TextInput>
          <View className="  h-12 w-12  absolute rounded-full  items-center justify-center bottom-3 left-2">
            <Image className="h-8 w-8" source={require("./assets/password.png")} />
          </View>
            </View>
            <View className="bg-white rounded-full  py-2 mb-3 ">
            <TextInput
            keyboardAppearance="dark"
            keyboardType="default"
            placeholder="Re-type Password"
            className="h-14 text-[20px] pl-16 pr-14"
            placeholderTextColor={"#000000"}
            secureTextEntry={true}
          ></TextInput>
          <View className="  h-12 w-12  absolute rounded-full  items-center justify-center bottom-3 left-2">
            <Image className="h-8 w-8" source={require("./assets/password.png")} />
          </View>
            </View>
            <View className="flex flex-row mx-auto">
            <Text className="text-white font-semibold text-[16px] text-center mt-2">
            Have a account? 
              </Text>
              <TouchableOpacity><Text className="text-blue-400 mt-2 font-semibold text-[16px] text-center justify-center align-middle"> Login!</Text></TouchableOpacity>
              </View>
              
          </View>
          <View className="min-h-[5%]"></View>
          <View className="justify-center">
            <TouchableOpacity className="bg-white mx-auto mt-auto h-16 w-[80%] bottom-0 rounded-full align-middle justify-center">
                <Text className="text-black font-bold text-[16px] text-center">Signup</Text>
            </TouchableOpacity >
          </View>
        </View>
        
        
      </View>
      </View>
      </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
  return ui;
}

function ProPIC() {
  const ui = (
    <SafeAreaView className="bg-black min-h-full">
      <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
      <StatusBar hidden={true} />
      <View className="w-full flex h-full ">
        <Image
          source={require("./assets/men.png")}
          className="min-w-full max-h-[40%] rounded-t-[60px]"
        ></Image>
        
        <View>
          <View className="mx-[30px] mt-7 ">
            
            <View className="flex flex-row">
              <Image
                source={require("./assets/tik.png")}
                className="w-6 h-6 mt-6"
              />
              <Text className="text-white font-semibold text-[16px] mt-6 ml-2">
                Secure, private messaging
              </Text>
            </View>

            <Text className="text-center text-white font-semibold text-lg mx-auto mt-[5%] mb-[2%]">Choose Image</Text>
            <TouchableOpacity className="flex h-44 w-44 rounded-full bg-white mx-auto">
              <Image source={require("./assets/propic.png")} className="w-40 h-40  my-auto mx-auto rounded-full"/>
            </TouchableOpacity >
            <ImagePicker />
          <View className="justify-center">
            <TouchableOpacity className="bg-white mx-auto mt-auto h-16 w-[80%] bottom-0 rounded-full align-middle justify-center">
                <Text className="text-black font-bold text-[16px] text-center">Upload</Text>
            </TouchableOpacity >
          </View>
        </View>
        
        
      </View>
      </View>
      </View>
      </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
  return ui;
}
var options = {
  title: 'Select Image',
  customButtons: [
    {
      name: 'customOptionKey',
      title: 'Choose Photo from Custom Option'
    },
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
ImagePicker.showImagePicker(options, response => {
  console.log('Response = ', response);
  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  } else if (response.customButton) {
    console.log(
      'User tapped custom button: ',
      response.customButton
    );
    alert(response.customButton);
  } else {
    setFilePath(response);
  }
});

const styles = StyleSheet.create({
  sent: {
    backgroundColor: "#FF89335a",
    maxWidth: "70%",
    alignSelf: "flex-end",
  },
  income: {
    backgroundColor: "#ffc8005a",
    maxWidth: "70%",
    alignSelf: "flex-start",
  },
  sentTime: {
    alignSelf: "flex-end",
  },
  incomeTime: {
    alignSelf: "flex-start",
  },
});
export default ProPIC;
