import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Slider from '@react-native-community/slider';

export default function Filtro({navigation}) {
  const [distance, setDistance] = useState(0);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [selectedConvenio, setSelectedConvenio] = useState(null);
  const [selectedAcessibilidade, setSelectedAcessibilidade] = useState([]);

  const specialties = [
    'Cardiologista', 'Neurologista', 'Oftalmologista', 'Ortopedista',
    'Psiquiatria', 'Dermatologia', 'Endocrinologia', 'Ginecologista',
    'Urologista', 'Odontologia'
  ];

  const convenios = [
    require('../assets/convenio1.png'),
    require('../assets/convenio2.png'),
    require('../assets/convenio3.png'),
    require('../assets/convenio4.png'),
    require('../assets/convenio5.png'),
    require('../assets/convenio6.png'),
    require('../assets/convenio7.png'),
    require('../assets/convenio8.png'),
  ];

  const acessibilidadeImagens = [
    require('../assets/acessibilidade1.png'),
    require('../assets/acessibilidade2.png'),
    require('../assets/acessibilidade3.png'),
    require('../assets/acessibilidade4.png'),
    require('../assets/acessibilidade5.png'),
  ];

  const toggleSpecialty = (specialty) => {
    if (selectedSpecialties.includes(specialty)) {
      setSelectedSpecialties(selectedSpecialties.filter(item => item !== specialty));
    } else {
      setSelectedSpecialties([...selectedSpecialties, specialty]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho com Ícones de Navegação */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Image
            source={require('../assets/setaPreta.png')} // Imagem da seta na pasta assets
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
          <Image
            source={require('../assets/completo.png')} // Imagem de check na pasta assets
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Seção de Distância */}
      <Text style={styles.label}>Distância do Hospital:</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={distance}
        onValueChange={(value) => setDistance(value)}
        minimumTrackTintColor="#4C4DDC"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#4C4DDC"
      />
      <Text style={styles.valueText}>{distance} km</Text>

      {/* Seção de Especialidades */}
      <Text style={styles.label}>Selecione Especialidades:</Text>
      <View style={styles.specialtiesContainer}>
        {specialties.map((specialty) => (
          <TouchableOpacity
            key={specialty}
            style={[
              styles.specialtyButton,
              selectedSpecialties.includes(specialty) && styles.specialtyButtonSelected
            ]}
            onPress={() => toggleSpecialty(specialty)}
          >
            <Text
              style={[
                styles.specialtyButtonText,
                selectedSpecialties.includes(specialty) && styles.specialtyButtonTextSelected
              ]}
            >
              {specialty}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Seção de Convênio */}
      <Text style={styles.label}>Convênio de Preferência:</Text>
      <View style={styles.convenioContainer}>
        {convenios.map((convenio, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.convenioButton,
              selectedConvenio === index && styles.convenioButtonSelected
            ]}
            onPress={() => setSelectedConvenio(index)}
          >
            <Image
              source={convenio}
              style={styles.convenioImage}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Seção de Acessibilidade */}
      <Text style={styles.label}>Acessibilidade:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.acessibilidadeContainer}>
        {acessibilidadeImagens.map((imagem, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.acessibilidadeButton,
              selectedAcessibilidade.includes(index) && styles.acessibilidadeButtonSelected
            ]}
            onPress={() => setSelectedAcessibilidade(prevState => {
              const newState = [...prevState];
              if (newState.includes(index)) {
                return newState.filter(item => item !== index);
              }
              return [...newState, index];
            })}
          >
            <Image
              source={imagem}
              style={styles.acessibilidadeImage}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  valueText: {
    color: '#000',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  specialtiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  specialtyButton: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    margin: 5,
  },
  specialtyButtonSelected: {
    backgroundColor: '#999AFF',
  },
  specialtyButtonText: {
    color: '#000',
    fontSize: 14,
  },
  specialtyButtonTextSelected: {
    color: '#FFF',
  },
  convenioContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  convenioButton: {
    width: '23%',
    paddingVertical: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginVertical: 5,
    alignItems: 'center',
  },
  convenioButtonSelected: {
    backgroundColor: '#D3D3D3',
  },
  convenioImage: {
    width: '100%',
    height: 50,
    resizeMode: 'contain',
  },
  acessibilidadeContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  acessibilidadeButton: {
    width: 70,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  acessibilidadeImage: {
    width: '100%',
    height: 50,
    resizeMode: 'contain',
  },
  acessibilidadeButtonSelected: {
    backgroundColor: '#D3D3D3',
  },
});
