import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '../constants'; 
import {MaterialIcons} from "@expo/vector-icons"

const PersonalChat = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, Color: COLORS.secondaryWhite }}>
      <StatusBar style="light" backgroundColor={COLORS.white} />
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 22,
        backgroundColor: COLORS.white,
        height: 60,
      }}>
      <View style= {{
        flexDirection: "row",
        alignItems: "center",
      }}>
        <TouchableOpacity 
        onPress={() => navigation.navigate("Contacts")}>
         
         <MaterialIcons
            
         />
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default PersonalChat;
