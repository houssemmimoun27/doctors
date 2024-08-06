import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";

import backgroundImage from '../assets/images/background.jpg';

const Settings = ({ navigation }) => {

    const navigateToProfile = () => {
        navigation.navigate("EditProfile");
    }

    const navigateToSecurity = () => {
        navigation.navigate("Security");
    }

    const navigateToHelpSupport = () => {
        navigation.navigate("Help & Support");
    }

    const navigateToLogOut = () => {
        navigation.navigate("Log Out");
    }

    const accountItems = [
        { icon: "person-outline", text: "Edit Profile", action: navigateToProfile },
        { icon: "security", text: "Security", action: navigateToSecurity },
    ];

    const supportItems = [
        { icon: "help-outline", text: "Help & Support", action: navigateToHelpSupport },
    ];

    const actionsItems = [
        { icon: "logout", text: "Log out", action: navigateToLogOut },
    ];

    const renderSettingsItem = ({ icon, text, action }) => (
        <TouchableOpacity
            onPress={action}
            style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 8,
                paddingLeft: 12,
                backgroundColor: COLORS.gray,
            }}
        >
            <MaterialIcons name={icon} size={24} color="black" />
            <Text style={{
                marginLeft: 36,
                ...FONTS.semiBold,
                fontWeight: '600',
                fontSize: 16,
            }}>{text}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* Using ImageBackground to set the background image */}
            <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
                <View style={{
                    marginHorizontal: 12,
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 10,
                }}>
                
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            position: 'absolute',
                            left: 0,
                        }}
                    >
                        <MaterialIcons
                            name="keyboard-arrow-left"
                            size={24}

                            color={COLORS.mauve}
                        />
                    </TouchableOpacity>
                    <Text style={{ ...FONTS.h3, color: COLORS.vert }}>Settings</Text>
                </View>
                <ScrollView style={{ marginHorizontal: 12 }}>
                <View style={{ height: 40 }} />

                    {/* Account Settings */}
                    <View style={{ marginBottom: 12 }}>
                        <Text style={{ ...FONTS.h4, marginVertical: 10, color: '#161616' }}>Account</Text>
                        <View style={{
                            borderRadius: 12,
                            borderWidth: 1,
                            borderColor: COLORS.vert,
                        }}>
                            {
                                accountItems.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {renderSettingsItem(item)}
                                    </React.Fragment>
                                ))
                            }
                        </View>
                    </View>
                    <View style={{ height: 20 }} />


                    {/* Support & About settings */}
                    <View style={{ marginBottom: 12 }}>
                        <Text style={{ ...FONTS.h4, marginVertical: 10, color: '#161616' }}>Support & About</Text>
                        <View style={{
                            borderRadius: 12,
                            borderWidth: 1,
                            borderColor: COLORS.vert,
                        }}>
                            {
                                supportItems.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {renderSettingsItem(item)}
                                    </React.Fragment>
                                ))
                            }
                        </View>
                    </View>
                    <View style={{ height: 20 }} />

                    {/* Actions Settings */}
                    <View style={{ marginBottom: 12 }}>
                        <Text style={{ ...FONTS.h4, marginVertical: 10, color: '#161616' }}>Actions</Text>
                        <View style={{
                            borderRadius: 12,
                            borderWidth: 1,
                            borderColor: COLORS.vert,
                        }}>
                            {
                                actionsItems.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {renderSettingsItem(item)}
                                    </React.Fragment>
                                ))
                            }
                        </View>
                    </View>

                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default Settings;
