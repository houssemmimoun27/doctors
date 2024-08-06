import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, ScrollView, useWindowDimensions, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS, SIZES, images } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { photos } from '../constants/data';
import { FontAwesome } from '@expo/vector-icons';


const ProfileHeader = ({ onAddPost }) => {
  const [newPostText, setNewPostText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAddPost = () => {
    if (newPostText || selectedImage) {
      const newPost = {
        text: newPostText,
        image: selectedImage,
      };
      onAddPost(newPost);
      setNewPostText('');
      setSelectedImage(null);
    } else {
      Alert.alert('Error', 'Please add text or image to post.');
    }
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Désolé, nous avons besoin des permissions pour accéder à vos photos!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      Alert.alert('Image Picker', 'No image selected');
    }
  };

  return (
    <View>
      <View style={{ width: '100%' }}>
        <Image
          source={images.cover}
          resizeMode='cover'
          style={{ height: 228, width: '100%' }}
        />
      </View>

      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image
          source={images.profile}
          resizeMode='contain'
          style={{
            height: 155,
            width: 155,
            borderRadius: 999,
            borderColor: COLORS.beige,
            borderWidth: 2,
            marginTop: -90,
          }}
        />
       <Text style={{ ...FONTS.h3, color: COLORS.black, marginVertical: 8 }}>
    Shaima Mechti
</Text>

<View style={{ flexDirection: 'row', marginVertical: 6, alignItems: 'center', justifyContent: 'center' }}>
  <FontAwesome name='leaf' size={24} color={COLORS.vertCouv }/>
  <Text style={{ color: COLORS.black, ...FONTS.body4, marginLeft: 4 }}>
    Nutritionniste- Cabinet Vitactive 
  </Text>
</View>
<View style={{ flexDirection: 'row', marginVertical: 6, alignItems: 'center' }}>
    <MaterialIcons name='location-on' size={24} color={COLORS.vertCouv } />
    <Text style={{ ...FONTS.body4, marginLeft: 4 }}>RUE ALGER, Hammam-Lif, Tunisia</Text>
</View>
<View style={{ flexDirection: 'row', marginVertical: 0, alignItems: 'center', marginLeft: -25 }}>
    <MaterialIcons name='phone' size={24} color={COLORS.vertCouv} />
    <Text style={{ ...FONTS.body4, marginLeft: 4 }}>+216 93 752 745</Text>
</View>

        <View style={{ paddingVertical: 8, flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column', alignItems: 'center', marginHorizontal: SIZES.padding }}>
            <Text style={{ ...FONTS.h2, color: COLORS.black }}>122</Text>
            <Text style={{ ...FONTS.body4, color:'#161616' }}>Followers</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center', marginHorizontal: SIZES.padding }}>
            <Text style={{ ...FONTS.h2, color: COLORS.black }}>67</Text>
            <Text style={{ ...FONTS.body4, color:  '#161616'}}>Following</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center', marginHorizontal: SIZES.padding }}>
            <Text style={{ ...FONTS.h2, color: COLORS.black }}>77K</Text>
            <Text style={{ ...FONTS.body4, color: '#161616' }}>Likes</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              width: 124,
              height: 36,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.white,
              borderRadius: 10,
              marginHorizontal: SIZES.padding * 2,
              borderColor:COLORS.vert,
              borderWidth: 2,
            }}
          >
            <Text style={{ ...FONTS.body4, color: COLORS.vertCouv }}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 124,
              height: 36,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.white,
              borderRadius: 10,
              borderColor:COLORS.vert,
              borderWidth: 2,
              marginHorizontal: SIZES.padding * 2,
            }}
          >
            <Text style={{ ...FONTS.body4, color: COLORS.vertCouv }}>Share Profile </Text>
          </TouchableOpacity>
        </View>

        <View style={{ 
            marginTop: 20, 
            width: '100%', 
            paddingHorizontal: SIZES.padding,
            borderColor: COLORS.vert,
            borderWidth: 1,
            borderRadius: 8,
            padding: 10,
            backgroundColor: COLORS.gray
          }}
        >
          <TextInput
            placeholder="Add a new post..."
            style={{
              borderWidth: 1,
              borderColor: '#D3D3D3',
              borderRadius: 8,
              padding: 10,
              marginBottom: 10,
              height: 100, // Adjusted height
            }}
            value={newPostText}
            onChangeText={setNewPostText}
            multiline
          />
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.white,
              padding: 10,
              borderRadius: 8,
              alignItems: 'center',
              marginBottom: 10,
              borderColor:COLORS.vert,
              borderWidth: 2,
            }}
            onPress={pickImage}
          >
            <Text style={{ color: COLORS.vert, ...FONTS.body4 }}>Import Photo/Video</Text>
          </TouchableOpacity>
          {selectedImage && (
            <Image source={{ uri: selectedImage }} style={{ width: '100%', height: 200, marginBottom: 10 }} />
          )}
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.vert,
              padding: 10,
              borderRadius: 8,
              alignItems: 'center',
            }}
            onPress={handleAddPost}
          >
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Profile = () => {
  const layout = useWindowDimensions();
  const [posts, setPosts] = useState([]);

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, aspectRatio: 1, margin: 3  }}>
      <Image
        source={item}
        style={{ width: '100%', height: '100%', borderRadius: 12 }}
      />
    </View>
  );

  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.gray} />
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        ListHeaderComponent={
          <View>
            <ProfileHeader onAddPost={handleAddPost} />
            <ScrollView style={{ maxHeight: layout.height - 200 }}>
              {posts.map((post, index) => (
                <View key={index} style={{ marginVertical: 10 }}>
                  <Text style={{ ...FONTS.body4, color: COLORS.black }}>{post.text}</Text>
                  {post.image && (
                    <Image source={{ uri: post.image }} style={{ width: '100%', height: 200, marginVertical: 10 }} />
                  )}
                </View>
              ))}
            </ScrollView>
          </View>
        }
        contentContainerStyle={{ paddingHorizontal: SIZES.padding, paddingBottom: 100 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </SafeAreaView>
  );
};

export default Profile;