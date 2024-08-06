import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES, images } from '../constants';

const Signupemail = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fonction pour vérifier si le mot de passe est valide
  const isPasswordValid = (password) => {
    const minLength = 12;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasDigit &&
      hasSpecialChar
    );
  };

  // Fonction pour vérifier si tous les champs sont remplis et si le mot de passe est valide
  const isFormValid = () => email.trim() !== '' && isPasswordValid(password);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.vertPastel }}>
      <View style={{ flex: 1, marginHorizontal: 25 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 8, color: COLORS.black }}>
            Adresse Email et Mot de Passe
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Adresse email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Entrez votre adresse e-mail"
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Mot de passe</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Entrez votre mot de passe"
              placeholderTextColor={COLORS.black}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />
          </View>
          <Text style={styles.passwordNote}>
            Il doit comporter au minimum 12 caractères avec des majuscules, des minuscules, des chiffres et des caractères spéciaux.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={[
            styles.button,
            { backgroundColor: isFormValid() ? COLORS.vert : COLORS.gray } // Changer la couleur du bouton selon la validité du formulaire
          ]}
          disabled={!isFormValid()} // Désactiver le bouton si le formulaire n'est pas valide
        >
          <Text style={{ color: COLORS.white, fontSize: 20 }}>Suivant</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 22,
  },
  input: {
    width: '100%',
  },
  passwordNote: {
    fontSize: 14,
    color: COLORS.black,
    marginTop: 8,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
});

export default Signupemail;


