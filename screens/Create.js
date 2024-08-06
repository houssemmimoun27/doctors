import React, { useState } from 'react';
import { SafeAreaView, Dimensions, StyleSheet, View, Image, TouchableHighlight, TextInput, ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useIsFocused } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Create = () => {
  const isFocused = useIsFocused();
  const [keyword, setKeyword] = useState('');

  const inputBoxTranslateX = useSharedValue(width);
  const backButtonOpacity = useSharedValue(0);
  const contentTranslateY = useSharedValue(height);
  const contentOpacity = useSharedValue(0);

  const _onFocus = () => {
    inputBoxTranslateX.value = withTiming(0, { duration: 300 });
    backButtonOpacity.value = withTiming(1, { duration: 300 });
    contentTranslateY.value = withTiming(0, { duration: 300 });
    contentOpacity.value = withTiming(1, { duration: 300 });
  };

  const _onBlur = () => {
    inputBoxTranslateX.value = withTiming(width, { duration: 300 });
    backButtonOpacity.value = withTiming(0, { duration: 300 });
    contentTranslateY.value = withTiming(height, { duration: 0 });
    contentOpacity.value = withTiming(0, { duration: 300 });
    setKeyword('');
  };

  const inputBoxStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: inputBoxTranslateX.value }]
    };
  });

  const backButtonStyle = useAnimatedStyle(() => {
    return {
      opacity: backButtonOpacity.value
    };
  });

  const contentStyle = useAnimatedStyle(() => {
    return {
      opacity: contentOpacity.value,
      transform: [{ translateY: contentTranslateY.value }]
    };
  });

  return (
    <>
      <SafeAreaView style={styles.header_safe_area}>
        <View style={styles.header}>
          <View style={styles.header_inner}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/images/images2.png')}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor={"#ccd0d5"}
              onPress={_onFocus}
              style={styles.search_icon_box}>
              <Icon name="search" size={22} color="#000000" />
            </TouchableHighlight>
            <Animated.View style={[styles.input_box, inputBoxStyle]}>
              <Animated.View style={backButtonStyle}>
                <TouchableHighlight
                  activeOpacity={1}
                  underlayColor={"#ccd0d5"}
                  onPress={_onBlur}
                  style={styles.back_icon_box}>
                  <Icon name="chevron-left" size={22} color="#000000" />
                </TouchableHighlight>
              </Animated.View>
              <TextInput
                placeholder="Search Vitactive"
                clearButtonMode='always'
                value={keyword}
                onChangeText={setKeyword}
                style={styles.input}
              />
            </Animated.View>
          </View>
        </View>
      </SafeAreaView>
      {/* Main Content Area */}
      <SafeAreaView style={styles.content_safe_area}>
  <Animated.View style={[styles.content, contentStyle]}>
    <View style={styles.content_inner}>
      <View style={styles.separator} />
      {keyword === '' && (
        <View style={styles.image_placeholder_container}>
          <Image
            source={require('../assets/images/Search-Illustration.jpg')}
            style={styles.image_placeholder}
            onLoad={() => console.log('Image loaded successfully')}
            onError={(error) => console.log('Image loading error', error)}
          />
          <Text style={styles.image_placeholder_text}>
            Enter a few words{"\n"}
                  to search on Vitactive{"\n"}
                  ...
          </Text>
        </View>
      )}
      {keyword !== '' && (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.search_item}>
            <Icon style={styles.item_icon} name="search" size={16} color="#cccccc" />
            <Text> Fake result 1</Text>
          </View>
          <View style={styles.search_item}>
            <Icon style={styles.item_icon} name="search" size={16} color="#cccccc" />
            <Text> Fake result 2</Text>
          </View>
          <View style={styles.search_item}>
            <Icon style={styles.item_icon} name="search" size={16} color="#cccccc" />
            <Text> Fake result 3</Text>
          </View>
          <View style={styles.search_item}>
            <Icon style={styles.item_icon} name="search" size={16} color="#cccccc" />
            <Text> Fake result 4</Text>
          </View>
          <View style={styles.search_item}>
            <Icon style={styles.item_icon} name="search" size={16} color="#cccccc" />
            <Text> Fake result 5</Text>
          </View>
          <View style={styles.search_item}>
            <Icon style={styles.item_icon} name="search" size={16} color="#cccccc" />
            <Text> Fake result 6</Text>
          </View>
          <View style={styles.search_item}>
            <Icon style={styles.item_icon} name="search" size={16} color="#cccccc" />
            <Text> Fake result 7</Text>
          </View>
          <View style={styles.search_item}>
            <Icon style={styles.item_icon} name="search" size={16} color="#cccccc" />
            <Text> Fake result 8</Text>
          </View>
          <View style={styles.search_item}>
            <Icon style={styles.item_icon} name="search" size={16} color="#cccccc" />
            <Text> Fake result 9</Text>
          </View>
        </ScrollView>
      )}
    </View>
  </Animated.View>
</SafeAreaView>

    </>
  );
};

export default Create;

const styles = StyleSheet.create({
  header_safe_area: {
    zIndex: 1000,
    backgroundColor: 'white',
  },
  header: {
    height: 180,
    paddingHorizontal: 6,
  },
  header_inner: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  imageContainer: {
    paddingTop: 1, // Adjust this padding as necessary
  },
  image: {
    width: 200,
    height: 160,
  },
  search_icon_box: {
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#e4e6eb',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Ensure search icon is above input box
  },
  input_box: {
    marginTop: 40,
    height: 105,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    width: width - 12,
    zIndex: 2, // Ensure input box is above search icon
  },
  back_icon_box: {
    width: 45,
    height: 45,
    borderRadius: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#e4e6eb',
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 15,
  },
  content_safe_area: {
  flex: 1,
  backgroundColor: 'white',
  zIndex: 999,
},
  content: {
  width: width,
  height: height,
  position: 'absolute',
  left: 0,
  bottom: 0,
  zIndex: 999,
  backgroundColor: 'white',
},
  content_inner: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'white', // Debug background color
  },
  separator: {
    marginTop: 5,
    height: 1,
    backgroundColor: '#e6e4eb',
  },
  image_placeholder_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'white', // Debug background color
  },
  image_placeholder: {
    width: 150,
    height: 113,
    alignSelf: 'center',
  },
  image_placeholder_text: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 5,
  },
  search_item: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e4eb',
    marginLeft: 16,
    
  },
  item_icon: {
    marginRight: 15,
   
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});
