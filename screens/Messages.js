import { View, Image, Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageContainer from '../components/PageContainer';

const Messages = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const imageWidth = windowWidth; // Adjust the size as needed

  const handleButtonClick = () => {
    navigation.navigate('Discussion');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <View style={styles.container}>
          <Image
            source={require('../assets/images/chat.gif')}
            style={{ width: imageWidth, height: (imageWidth * 1920) / 1080, marginTop: -60 }}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
            <Text style={styles.buttonText}>Start Messaging</Text>
          </TouchableOpacity>
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 22,
  },
  button: {
    position: 'absolute',
    bottom: 145,
    backgroundColor: '#F49090',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
