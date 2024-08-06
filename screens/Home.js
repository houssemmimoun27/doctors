import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import backgroundImage from '../assets/images/background.jpg'; // Importer l'image de fond
import patient1 from '../assets/images/patient1.jpeg'; // Importer l'image de fond
import patient2 from '../assets/images/patient2.jpg'; // Importer l'image de fond
import patient3 from '../assets/images/patient3.jpg'; // Importer l'image de fond
import patient4 from '../assets/images/patient4.jpg'; // Importer l'image de fond



const HomeScreen = ({ navigation }) => {
  // Exemple de nombre total de patients
  const totalPatients = 42;
  
  // Exemple de notifications avec images associées
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Nouvelle demande de rendez-vous de la part de "Yasmine Ayed"', read: false, image: patient1 },
    { id: 2, text: 'Mise à jour du dossier patient "Eya Taoueli"', read: false, image: patient2},
    { id: 3, text: 'Rappel de consultation', read: false, image: patient4 },
    { id: 4, text: 'Nouvelle demande de rendez-vous de la part de "Dhia Naoueli"', read: false, image: patient3 },
  ]);

  // Fonction pour naviguer vers la page de détails des patients
  const handlePressTotalPatients = () => {
    // Remplacez `PatientDetailsPage` par le nom de votre écran ou composant
    navigation.navigate('PatientDetailsPage', { totalPatients });
  };

  // Fonction pour marquer une notification comme lue
  const handlePressNotification = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Message de bienvenue */}
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.helloText}>Hello</Text>
          <Text style={styles.drMechtiText}>Dr. Mechti</Text>
        </View>
        
        {/* Icône Patient */}
        <View style={styles.iconContainer}>
          <Icon name="people" size={70} color="#009B50" />
          <TouchableOpacity onPress={handlePressTotalPatients}>
            <Text style={styles.totalPatientsText}>{totalPatients} patients</Text>
          </TouchableOpacity>
        </View>
        
        {/* Notifications */}
        <View style={styles.notificationsContainer}>
          <Text style={styles.notificationsTitle}>Notifications:</Text>
          {notifications.map((notification) => (
            <TouchableOpacity 
              key={notification.id} 
              style={[styles.notificationContainer, notification.read && styles.notificationRead]}
              onPress={() => handlePressNotification(notification.id)}
            >
              <Image source={notification.image} style={styles.notificationImage} />
              <Text style={styles.notificationText}>{notification.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  welcomeTextContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
    marginTop: 50,
  },
  helloText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#d9abab',
  },
  drMechtiText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#d9abab',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20, // Réduit l'espace sous l'icône
  },
  totalPatientsText: {
    fontSize: 20,
    color: '#333',
    marginTop: 5,
  },
  notificationsContainer: {
    marginTop: 10, // Réduit l'espace au-dessus des notifications
  },
  notificationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFFFEB', // Couleur bleue pour les nouvelles notifications
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    borderColor: '#EFFFEB', // Couleur de la bordure légère
    borderWidth: 1,
  },
  notificationRead: {
    backgroundColor: '#ffffff', // Couleur blanche pour les notifications lues
  },
  notificationImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // Rend l'image circulaire
    marginRight: 10,
  },
  notificationText: {
    fontSize: 16,
    flex: 1,
  },
});

export default HomeScreen;
