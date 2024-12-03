import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaStrength, setSenhaStrength] = useState(0);

  // Função para calcular a força da senha
  const calculatePasswordStrength = (password) => {
    let strength = 0;

    // Verifica as condições da senha
    if (password.length >= 8) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/\W/.test(password)) strength += 25;

    setSenhaStrength(strength);
  };

  // Função para formatar o CPF
  const formatCpf = (value) => {
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 11);
    const formattedValue = numericValue
      .replace(/^(\d{3})(\d)/, '$1.$2')
      .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    setCpf(formattedValue);
  };

  // Função para formatar a data de nascimento
  const formatDataNascimento = (value) => {
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 8);
    const formattedValue = numericValue
      .replace(/^(\d{2})(\d)/, '$1/$2')
      .replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3');
    setDataNascimento(formattedValue);
  };

  // Função para validar o formato do email
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  // Função para verificar se todos os campos estão preenchidos e validados
  const handleNext = () => {
    if (!nome || !email || !cpf || !dataNascimento || !endereco || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos antes de continuar.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Erro', 'Por favor, insira um email válido com o símbolo "@"');
      return;
    }

    if (senhaStrength < 75) {
      Alert.alert('Erro', 'A senha deve ser forte (pelo menos 8 caracteres, 1 maiúscula, 1 caractere especial).');
      return;
    }

    // Navega para a página "Filtro" se todos os campos estiverem preenchidos e validados
    navigation.navigate('Filtro');
  };

  // Função para definir a cor da barra de força com base no valor de senhaStrength
  const getStrengthColor = () => {
    if (senhaStrength < 50) return '#FF4C4C'; // Vermelho para fraca
    if (senhaStrength < 75) return '#FFCC00'; // Amarelo para média
    return '#4CAF50'; // Verde para forte
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Image
          source={require('../assets/setaPreta.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Registre-se conosco!</Text>
      <Text style={styles.subtitle}>Sua informação está segura conosco</Text>
      <TextInput
        placeholder="Nome completo"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="CPF do titular"
        style={styles.input}
        keyboardType="numeric"
        value={cpf}
        onChangeText={formatCpf}
      />
      <TextInput
        placeholder="Data de Nascimento (DD/MM/AAAA)"
        style={styles.input}
        keyboardType="numeric"
        value={dataNascimento}
        onChangeText={formatDataNascimento}
      />
      <TextInput
        placeholder="Endereço"
        style={styles.input}
        value={endereco}
        onChangeText={setEndereco}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={(text) => {
          setSenha(text);
          calculatePasswordStrength(text);
        }}
      />

      <View style={[styles.strengthBar, { width: `${senhaStrength}%`, backgroundColor: getStrengthColor() }]} />
      <Text style={styles.strengthText}>
        {senhaStrength < 50 ? 'Senha fraca' : senhaStrength < 75 ? 'Senha média' : 'Senha forte'}
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 40,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#777777',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4C4DDC',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  strengthBar: {
    height: 8,
    marginTop: 10,
    borderRadius: 5,
    maxWidth: '100%',
  },
  strengthText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
    color: '#888',
  },
});
