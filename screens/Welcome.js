import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS, SIZES, images } from '../constants';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[COLORS.vertPastel, COLORS.vert2]}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={images.logo}
          style={{
            height: 300,
            width: 300,
            borderRadius: 20,
            marginTop: 20,
          }}
        />
        <Button
          title="Se connecter"
          onPress={() => navigation.navigate('Login')}
          style={{
            marginTop: 30,
            width: '100%',
          }}
        />
        
        <Text
          style={{
            fontSize: 17,
            color: COLORS.white,
            marginTop: 20,
            textAlign: 'center',
          }}
        >
          Vous n'avez pas de compte ?
        </Text>
        
        <Button
          title="S'inscrire"
          onPress={() => navigation.navigate('Signup')}
          style={{
            marginTop: 10,
            width: '100%',
          }}
        />
      </View>
    </LinearGradient>
  );
}

export default Welcome;
