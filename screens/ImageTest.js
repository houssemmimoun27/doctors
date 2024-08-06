import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const ImageTest = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Search-Illustration.jpg')}
        style={styles.image}
        onLoad={() => console.log('Image loaded successfully')}
        onError={(error) => console.log('Image loading error', error)}
      />
      <Text>Image Test</Text>
    </View>
  );
};

export default ImageTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 113,
  },
});
