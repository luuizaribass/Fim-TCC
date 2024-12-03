import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import MedPoint from '../assets/logobranca.png'; // Seu logo

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        // Aqui você pode adicionar sua lógica de validação de login
        if (email === 'teste@teste.com' && senha === 'senha') {
            navigation.navigate('TelaInicial'); // Navega para a página inicial se o login for bem-sucedido
        } else {
            Alert.alert('Login Inválido', 'Verifique seu e-mail e senha.');
        }
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
                        <Image style={styles.seta} source={require('./../assets/seta.png')} />
                    </TouchableOpacity>

                    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <Image source={MedPoint} style={styles.img} />
                    </Animatable.View>

                    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                        <Text style={styles.title}>Login</Text>

                        <TextInput
                            placeholder='Email'
                            style={styles.input}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />

                        <View style={styles.passwordContainer}>
                            <TextInput
                                placeholder='Senha'
                                style={styles.inputPassword}
                                secureTextEntry={true}
                                value={senha}
                                onChangeText={setSenha}
                            />
                            <TouchableOpacity>
                                <FontAwesome name="eye" size={24} color="gray" />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity>
                            <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>

                        <View style={styles.socialLoginContainer}>
                            <TouchableOpacity>
                                <FontAwesome name="google" size={40} color="#DB4437" />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <FontAwesome name="facebook" size={40} color="#3b5998" />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Cadastro')}>
                            <Text style={styles.registerText}>
                                Não tem uma conta? <Text style={styles.linkText}>Cadastre-se</Text>
                            </Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4C4DDC', // Cor principal
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
    },
    seta: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    containerHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80,
    },
    img: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    containerForm: {
        flex: 1,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 40,
        fontSize: 16,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    passwordContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        height: 40,
        marginBottom: 12,
    },
    inputPassword: {
        flex: 1,
        fontSize: 16,
        paddingHorizontal: 10,
    },
    forgotPassword: {
        textAlign: 'right',
        color: '#4C4DDC',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#4C4DDC',
        borderRadius: 5,
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    buttonRegister: {
        marginTop: 20,
        alignSelf: 'center',
    },
    registerText: {
        color: '#000',
    },
    linkText: {
        color: '#4C4DDC',
        fontWeight: 'bold',
    },
});
