import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo e Título */}
      <View style={styles.header}>
      <Image
        source={require('../assets/logobranca.png') } // Substitua pelo link ou local da imagem
        style={styles.logo}
        resizeMode="contain"
      />
        <Text style={styles.title}>Encontre o hospital ideal perto de você facilmente!</Text>
        <Text style={styles.subtitle}>Localize com precisão</Text>
      </View>

      {/* Botão */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Slider')}
      >
        <Text style={styles.buttonText}>Começar</Text>
        <Text style={styles.arrow}>→</Text>
      </TouchableOpacity>

      {/* Imagem */}
      <Image
        source={require('../assets/hosp.png')} // Substitua pelo link ou local da imagem
        style={styles.image}
        resizeMode="cover"
      />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4C4DDC', // Fundo azul
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  header: {
    alignItems: 'center',
    marginBottom: -5,
  },
  logo: {
    width: 190,
    height: 190,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: -35
  },
  subtitle: {
    fontSize: 18,
    color: '#E6E6E6',
    textAlign: 'center',
    marginTop: 5,
  },
  image: {
    width: '100%',
    height: 400,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4142A4',
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginTop: -70,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 8,
  },
  arrow: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
