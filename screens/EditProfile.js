import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, Modal } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from "expo-image-picker";
import { COLORS, FONTS } from '../constants';
import { MaterialIcons } from "@expo/vector-icons";
import { imagesDataURL } from '../constants/data';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';

const EditProfile = ({ navigation }) => {
    const [selectedImage, setSelectedImage] = useState(imagesDataURL[0]);
    const [name, setName] = useState("Shaima Mechti");
    const [email, setEmail] = useState("vitactive.hlif@outlook.com");
    const [password, setPassword] = useState("randompassword");
    const [country, setCountry] = useState("RUE ALGER, Hammam-Lif, Tunisia");
    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const today = new Date();
    const startDate = getFormatedDate(
        today.setDate(today.getDate() + 1),
        "YYYY/MM/DD"
    )
    const [selectedStartDate, setSelectedStartDate] = useState("01/01/1990");
    const [startedDate, setStartedDate] = useState("12/12/2023");
    const handleOnChangeStartDate = (propDate) => {
        setStartedDate(propDate);
    }

    const handleOnPressStartDate = () => {
        setOpenStartDatePicker(!openStartDatePicker);
    }

    const handleImageSelection = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
    };

    function renderDatePicker() {
        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={openStartDatePicker}
            >
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        margin: 20,
                        backgroundColor: COLORS.vert,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                        padding: 35,
                        width: "90%",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5
                    }}>
                        <DatePicker
                            mode="calendar"
                            minimumDate={startDate}
                            selected={startedDate}
                            onDateChanged={handleOnChangeStartDate}
                            onSelectedChange={(date) => setSelectedStartDate(date)}
                            options={{
                                backgroundColor: COLORS.vert,
                                textHeaderColor: COLORS.white,
                                textDefaultColor: COLORS.white,
                                selectedTextColor: COLORS.white,
                                mainColor: "#469ab6",
                                textSecondaryColor: COLORS.white,
                                borderColor: "#469ab6"
                            }}
                        />
                        <TouchableOpacity
                            onPress={handleOnPressStartDate}
                        >
                            <Text style={{ ...FONTS.body3, color: COLORS.white }}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.white,
            paddingHorizontal: 15
        }}>
            <ScrollView>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 0,
                    marginTop: 10,
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            position: 'absolute',
                            left: 0
                        }}
                    >
                        <MaterialIcons
                            name="keyboard-arrow-left"
                            size={24}
                            color={COLORS.mauve}
                        />
                    </TouchableOpacity>
                    <Text style={{ ...FONTS.h3, color: COLORS.vert, marginHorizontal: 112 }}>Edit Profile</Text>
                </View>
                <View style={{
                    alignItems: "center",
                    marginVertical: 10
                }}>
                    <TouchableOpacity onPress={handleImageSelection}>
                        <Image
                            source={{ uri: selectedImage }}
                            style={{
                                height: 170,
                                width: 170,
                                borderRadius: 85,
                                borderWidth: 2,
                                borderColor: COLORS.primary
                            }}
                        />
                        <View style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 10,
                            zIndex: 999,
                            backgroundColor: COLORS.white,
                            borderRadius: 16,
                            padding: 4
                        }}>
                            <MaterialIcons
                                name='photo-camera'
                                size={32}
                                color={COLORS.vertCouv}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{
                        flexDirection: "column",
                        marginBottom: 6
                    }}>
                        <Text style={{ ...FONTS.h4, color: COLORS.primary }}>Name</Text>
                        <View style={{
                            height: 44,
                            width: "100%",
                            borderColor: COLORS.secondaryGray,
                            borderWidth: 1,
                            borderRadius: 4,
                            marginVertical: 6,
                            justifyContent: "center",
                            paddingLeft: 8,
                            backgroundColor: COLORS.gray,

                        }}>
                            <TextInput
                                value={name}
                                onChangeText={value => setName(value)}
                                editable={true}
                            />
                        </View>
                    </View>

                    <View style={{
                        flexDirection: "column",
                        marginBottom: 6
                    }}>
                        <Text style={{ ...FONTS.h4, color: COLORS.primary }}>Email</Text>
                        <View style={{
                            height: 44,
                            width: "100%",
                            borderColor: COLORS.secondaryGray,
                            borderWidth: 1,
                            borderRadius: 4,
                            marginVertical: 6,
                            justifyContent: "center",
                            paddingLeft: 8,
                            backgroundColor: COLORS.gray,

                        }}>
                            <TextInput
                                value={email}
                                onChangeText={value => setEmail(value)}
                                editable={true}
                            />
                        </View>
                    </View>

                    <View style={{
                        flexDirection: "column",
                        marginBottom: 6
                    }}>
                        <Text style={{ ...FONTS.h4, color: COLORS.primary }}>Password</Text>
                        <View style={{
                            height: 44,
                            width: "100%",
                            borderColor: COLORS.secondaryGray,
                            borderWidth: 1,
                            borderRadius: 4,
                            marginVertical: 6,
                            justifyContent: "center",
                            paddingLeft: 8,
                            backgroundColor: COLORS.gray,

                        }}>
                            <TextInput
                                value={password}
                                onChangeText={value => setPassword(value)}
                                editable={true}
                                secureTextEntry
                            />
                        </View>
                    </View>

                    <View style={{
                        flexDirection: "column",
                        marginBottom: 6
                    }}>
                        <Text style={{ ...FONTS.h4, color: COLORS.primary }}>Date of Birthday</Text>
                        <TouchableOpacity
                            onPress={handleOnPressStartDate}
                            style={{
                                height: 44,
                                width: "100%",
                                borderColor: COLORS.secondaryGray,
                                borderWidth: 1,
                                borderRadius: 4,
                                marginVertical: 6,
                                justifyContent: "center",
                                paddingLeft: 8,
                                backgroundColor: COLORS.gray,

                            }}>
                            <Text>{selectedStartDate}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    flexDirection: "column",
                    marginBottom: 6
                }}>
                    <Text style={{ ...FONTS.h4, color: COLORS.primary }}>Location</Text>
                    <View style={{
                        height: 44,
                        width: "100%",
                        borderColor: COLORS.secondaryGray,
                        borderWidth: 1,
                        borderRadius: 4,
                        marginVertical: 6,
                        justifyContent: "center",
                        paddingLeft: 8,
                        backgroundColor: COLORS.gray,

                    }}>
                        <TextInput
                            value={country}
                            onChangeText={value => setCountry(value)}
                            editable={true}
                        />
                    </View>
                </View>

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
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.white,
                        height: 44,
                        borderRadius: 6,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    
                </TouchableOpacity>

                {renderDatePicker()}
            </ScrollView>
        </SafeAreaView>
    );
};

export default EditProfile;