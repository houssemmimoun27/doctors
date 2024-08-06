import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Button, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { COLORS } from '../constants';

const Signup = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [birthDateError, setBirthDateError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [genderError, setGenderError] = useState('');

  const validateName = (name) => {
    return /^[a-zA-Z\s]*$/.test(name);
  };

  const validateBirthDate = (date) => {
    return /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/.test(date);
  };

  const validatePhoneNumber = (number) => {
    return /^\d{8}$/.test(number);
  };

  const handleSignup = () => {
    let valid = true;

    // Validate fields
    if (!validateName(firstName) || firstName.trim() === '') {
      setFirstNameError("Le prénom ne doit contenir que des lettres et ne peut pas être vide.");
      valid = false;
    } else {
      setFirstNameError('');
    }

    if (!validateName(lastName) || lastName.trim() === '') {
      setLastNameError("Le nom ne doit contenir que des lettres et ne peut pas être vide.");
      valid = false;
    } else {
      setLastNameError('');
    }

    if (!validateBirthDate(birthDate)) {
      setBirthDateError("La date de naissance doit être au format JJ/MM/AAAA.");
      valid = false;
    } else {
      setBirthDateError('');
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneNumberError("Le numéro de téléphone doit contenir exactement 8 chiffres.");
      valid = false;
    } else {
      setPhoneNumberError('');
    }

    if (!gender) {
      setGenderError("Veuillez sélectionner un genre.");
      valid = false;
    } else {
      setGenderError('');
    }

    if (valid) {
      navigation.navigate('Signupemail');
    }
  };

  const formatBirthDate = (text) => {
    text = text.replace(/\D/g, '');
    if (text.length > 4) {
      text = text.slice(0, 2) + '/' + text.slice(2, 4) + '/' + text.slice(4);
    } else if (text.length > 2) {
      text = text.slice(0, 2) + '/' + text.slice(2);
    }
    return text;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.vertPastel }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', marginHorizontal: 25 }}>
          <View style={{ marginVertical: 22 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 8, color: COLORS.vert }}>
              S'inscrire
            </Text>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Prénom</Text>
            <View style={{ width: '100%', height: 48, borderColor: COLORS.black, borderWidth: 1, borderRadius: 8, alignItems: 'center', justifyContent: 'center', paddingLeft: 22 }}>
              <TextInput
                placeholder="Entrez votre prénom"
                placeholderTextColor={COLORS.black}
                value={firstName}
                onChangeText={(text) => {
                  setFirstName(text);
                  if (!validateName(text) || text.trim() === '') {
                    setFirstNameError("Le prénom ne doit contenir que des lettres et ne peut pas être vide.");
                  } else {
                    setFirstNameError('');
                  }
                }}
                style={{ width: '100%' }}
              />
            </View>
            {firstNameError ? <Text style={{ color: 'red' }}>{firstNameError}</Text> : null}
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Nom</Text>
            <View style={{ width: '100%', height: 48, borderColor: COLORS.black, borderWidth: 1, borderRadius: 8, alignItems: 'center', justifyContent: 'center', paddingLeft: 22 }}>
              <TextInput
                placeholder="Entrez votre nom"
                placeholderTextColor={COLORS.black}
                value={lastName}
                onChangeText={(text) => {
                  setLastName(text);
                  if (!validateName(text) || text.trim() === '') {
                    setLastNameError("Le nom ne doit contenir que des lettres et ne peut pas être vide.");
                  } else {
                    setLastNameError('');
                  }
                }}
                style={{ width: '100%' }}
              />
            </View>
            {lastNameError ? <Text style={{ color: 'red' }}>{lastNameError}</Text> : null}
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Date de naissance</Text>
            <View style={{ width: '100%', height: 48, borderColor: COLORS.black, borderWidth: 1, borderRadius: 8, alignItems: 'center', justifyContent: 'center', paddingLeft: 22 }}>
              <TextInput
                placeholder="JJ/MM/AAAA"
                placeholderTextColor={COLORS.black}
                value={birthDate}
                onChangeText={(text) => {
                  const formattedText = formatBirthDate(text);
                  setBirthDate(formattedText);
                  if (!validateBirthDate(formattedText)) {
                    setBirthDateError("La date de naissance doit être au format JJ/MM/AAAA.");
                  } else {
                    setBirthDateError('');
                  }
                }}
                maxLength={10}
                keyboardType="numeric"
                style={{ width: '100%' }}
              />
            </View>
            {birthDateError ? <Text style={{ color: 'red' }}>{birthDateError}</Text> : null}
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Sexe</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 8 }}>
              <TouchableOpacity
                onPress={() => {
                  setGender('Feminin');
                  setGenderError('');
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderColor: gender === 'Feminin' ? COLORS.vert : COLORS.grey,
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: 10,
                  backgroundColor: gender === 'Feminin' ? COLORS.vert : COLORS.white,
                }}
              >
                <Text style={{ color: COLORS.black }}>Feminin</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setGender('Masculin');
                  setGenderError('');
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderColor: gender === 'Masculin' ? COLORS.vert : COLORS.grey,
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: 10,
                  backgroundColor: gender === 'Masculin' ? COLORS.vert : COLORS.white,
                }}
              >
                <Text style={{ color: COLORS.black }}>Masculin</Text>
              </TouchableOpacity>
            </View>
            {genderError ? <Text style={{ color: 'red', textAlign: 'center' }}>{genderError}</Text> : null}
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Numéro de téléphone</Text>
            <View style={{ width: '100%', height: 48, borderColor: COLORS.black, borderWidth: 1, borderRadius: 8, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 22 }}>
              <TextInput
                placeholder="+216"
                placeholderTextColor={COLORS.black}
                keyboardType="numeric"
                editable={false}
                style={{ width: '12%', borderRightWidth: 1, borderRightColor: COLORS.grey, height: '100%' }}
              />
              <TextInput
                placeholder="Entrez votre numéro de téléphone"
                placeholderTextColor={COLORS.black}
                keyboardType="numeric"
                value={phoneNumber}
                onChangeText={(text) => {
                  setPhoneNumber(text);
                  if (!validatePhoneNumber(text)) {
                    setPhoneNumberError("Le numéro de téléphone doit contenir exactement 8 chiffres.");
                  } else {
                    setPhoneNumberError('');
                  }
                }}
                maxLength={8}
                style={{ width: '80%' }}
              />
            </View>
            {phoneNumberError ? <Text style={{ color: 'red' }}>{phoneNumberError}</Text> : null}
          </View>

          <Button title="Suivant" onPress={handleSignup} color={COLORS.vert} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;

