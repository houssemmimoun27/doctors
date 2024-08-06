import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable, TextInput, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import Button from '../components/Button';
import { COLORS, FONTS, SIZES, images } from '../constants';

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you would typically perform authentication
    // For this example, we'll just simulate a successful login
    if (email && password) {
      // Navigate to the BottomTabNav
      navigation.replace('BottomTabNavigation');
    } else {
      // Show an error message if email or password is empty
      alert('Veuillez compléter les champs manquants');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.vertPastel }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 12, color: COLORS.vert }}>
            Bienvenue !
          </Text>
          <Text style={{ fontSize: 16, color: COLORS.vert }}>
            Connectez-vous avec votre nutritionniste.
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Adresse email</Text>
          <View style={{ width: '100%', height: 48, borderColor: COLORS.black, borderWidth: 1, borderRadius: 8, alignItems: 'center', justifyContent: 'center', paddingLeft: 22 }}>
            <TextInput 
              placeholder="Entrez votre adresse e-mail"
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
              style={{ width: '100%' }}
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Mot de passe</Text>
          <View style={{ width: '100%', height: 48, borderColor: COLORS.black, borderWidth: 1, borderRadius: 8, alignItems: 'center', justifyContent: 'center', paddingLeft: 22 }}>
            <TextInput 
              placeholder="Entrez votre mot de passe"
              placeholderTextColor={COLORS.black}
              secureTextEntry={!isPasswordShown}
              style={{ width: '100%' }}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{ position: 'absolute', right: 12 }}>
              <Ionicons name={isPasswordShown ? "eye-off" : "eye"} size={24} color={COLORS.black} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginVertical: 6 }}>
          <Checkbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />
          <Text>Remember me</Text>
        </View>

        <Button
          title="Se connecter"
          filled
          style={{ marginTop: 18, marginBottom: 4, backgroundColor: COLORS.vert2,
          }}
          onPress={handleLogin}
        />

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 22 }}>
          <Text style={{ fontSize: 16, color: COLORS.black }}>Vous n'avez pas de compte ?</Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text style={{ fontSize: 16, color: COLORS.primary, fontWeight: "bold", marginLeft: 6 }}>S'inscrire</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
