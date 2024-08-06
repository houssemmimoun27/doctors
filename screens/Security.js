import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS } from '../constants';
import { MaterialIcons } from '@expo/vector-icons';
import backgroundImage from '../assets/images/aaa.jpg';

const Security = ({ navigation }) => {
  const [CorrentPassword, setPassword] = useState("Set your current password...");
  const [Newpassword, setNewPassword] = useState("Set your new password...");
  const [NewpasswordValidation, setNewValidPassword] = useState("Validate your new password...");
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const blink = () => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
        }),
      ]).start(() => {
        setTimeout(blink, 0);
      });
    };
    blink();
  }, [fadeAnim]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ImageBackground
        source={backgroundImage}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 12,
          paddingTop: 10,
        }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color={COLORS.mauve}
            />
          </TouchableOpacity>
          <Text style={{ ...FONTS.h3, color: COLORS.vert, marginHorizontal: 112}}>Security</Text>
        </View>
        <ScrollView style={{ marginHorizontal: 12 }}>
          <View style={{ height: 110 }} />
          <View style={{
            flexDirection: "column",
            marginBottom: 16
          }}>
            <Text style={{ ...FONTS.h4, color: COLORS.primary }}>Password</Text>
            <View style={{
              height: 44,
              borderColor: COLORS.beige,
              borderWidth: 1,
              borderRadius: 4,
              marginVertical: 6,
              justifyContent: "center",
              paddingLeft: 8,
              backgroundColor: COLORS.gray,
            }}>
              <TextInput
                value={CorrentPassword}
                onChangeText={value => setPassword(value)}
              />
            </View>
          </View>
          <View style={{
            flexDirection: "column",
            marginBottom: 16
          }}>
            <Text style={{ ...FONTS.h4, color: COLORS.primary }}>New Password</Text>
            <View style={{
              height: 44,
              borderColor: COLORS.beige,
              borderWidth: 1,
              borderRadius: 4,
              marginVertical: 6,
              justifyContent: "center",
              paddingLeft: 8,
              backgroundColor: COLORS.gray,
            }}>
              <TextInput
                value={Newpassword}
                onChangeText={value => setNewPassword(value)}
              />
            </View>
          </View>
          <View style={{
            flexDirection: "column",
            marginBottom: 16
          }}>
            <Text style={{ ...FONTS.h4, color: COLORS.primary }}>Validate new password</Text>
            <View style={{
              height: 44,
              borderColor: COLORS.beige,
              borderWidth: 1,
              borderRadius: 4,
              marginVertical: 6,
              justifyContent: "center",
              paddingLeft: 8,
              backgroundColor: COLORS.gray,
            }}>
              <TextInput
                value={NewpasswordValidation}
                onChangeText={value => setNewValidPassword(value)}
              />
            </View>
          </View>
          <View style={{ height: 70 }} />

          <TouchableOpacity
            style={{
              backgroundColor: COLORS.vert,
              height: 44,
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text style={{
              ...FONTS.body3,
              color: COLORS.white
            }}>Save Change</Text>
          </TouchableOpacity>
          <View style={{ height: 20 }} />
          <Animated.View style={{ opacity: fadeAnim }}>
            <Text style={{ ...FONTS.h5, color: "#ED1A1A" }}>
              For optimal security, please choose a password that includes uppercase letters, numbers, and symbols.
            </Text>
          </Animated.View>
          <View style={{ height: 40 }} />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Security;
