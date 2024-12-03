import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const slides = [
  {
    id: '1',
    title: 'Encontre hospitais próximos com um toque.',
    subtitle: 'Geolocalização precisa para sua saúde.',
    image: require('../assets/inicio1.png'), 
  },
  {
    id: '2',
    title: 'Informações atualizadas sobre hospitais.',
    subtitle: 'Tudo disponível em segundos.',
    image: require('../assets/inicio2.png'), 
  },
  {
    id: '3',
    title: 'Facilidade no acesso às suas necessidades médicas.',
    subtitle: 'Tudo em um só lugar!',
    image: require('../assets/inicio3.png'), 
  },
];

export default function IntroScreen({ navigation }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigation.navigate('Login'); // IAAAAAS É AQUI QUE VAI PRO BEM VINDOOOOO TE AMOOOOOO IASSSSSSS
    }
  };

  return (
    <View style={styles.container}>
      {/* Imagem */}
      <View style={styles.imageView} >
      <Image
        source={slides[currentSlide].image} 
        style={styles.image}
        resizeMode="contain"
      />
      </View>

      {/* Texto do Slide */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{slides[currentSlide].title}</Text>
        <Text style={styles.subtitle}>{slides[currentSlide].subtitle}</Text>
      

      {/* Indicadores de Slide */}
      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === currentSlide ? styles.indicatorActive : null,
            ]}
          />
        ))}
      </View>

      {/* Botão */}
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {currentSlide === slides.length - 1 ? 'Comece já' : 'Próximo'}
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4C4DDC', 
      justifyContent: 'space-between',
    },
    imageView: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
    },
    image: {
      width: 320,
      height: 320,
      resizeMode: 'contain',
    },
    textContainer: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 40,
      width: '100%',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: '#808080',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    indicatorContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    indicator: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#ccc',
      marginHorizontal: 5,
      marginTop: 20,
    },
    indicatorActive: {
      backgroundColor: '#4C4DDC',
    },
    button: {
      backgroundColor: '#4C4DDC',
      paddingVertical: 12,
      paddingHorizontal: 20,
      width: 250,
      borderRadius: 15,
      
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 17,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  
