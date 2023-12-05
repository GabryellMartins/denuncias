import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

import arcoires from '../../../assets/arcoires.png';

const RealizaDenuncia = ({ navigation }) => {

    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [referencia, setReferencia] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleTelaPrincipal = () => {

        console.log('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Image
                    source={arcoires}
                    style={styles.image}
                />
                <Text style={styles.topBarText}> Denuncias Arco-Iris</Text>
                <Text style={styles.topBarText}>📱(14)3477-1128</Text>

            </View>


            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltarButton}>
                <Text style={styles.voltarButtonText}>◀ VOLTAR</Text>
            </TouchableOpacity>


            <View style={styles.headerBG}>
                <Text style={styles.header}>NOVA DENUNCIA</Text>
            </View>


            <View style={styles.headerdescriBG}>
                <Text style={styles.headerdescri}>Utilize o formulario abaixo para denunciar descarte irregular de residuos ou outros ocorridos pela cidade. </Text>
            </View>


            <View style={styles.denunContainer}>
                <TextInput
                    placeholder="Endereço EX: AV.Brasil"
                    onChangeText={(text) => setEndereco(text)}
                    value={endereco}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Numero EX: 1140"
                    onChangeText={(text) => setNumero(text)}
                    value={numero}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Bairro EX: Centro"
                    onChangeText={(text) => setBairro(text)}
                    value={bairro}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Complemento EX: Fundo"
                    onChangeText={(text) => setComplemento(text)}
                    value={complemento}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Referencia EX: Proximo a escola"
                    onChangeText={(text) => setReferencia(text)}
                    value={referencia}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Insira sua Denuncia/Descrição"
                    onChangeText={(text) => setDescricao(text)}
                    value={descricao}
                    style={styles.input}
                />

                <TouchableOpacity onPress={() => navigation.navigate('ListaDenuncias')} style={styles.enviarButton}>
                    <Text style={styles.enviarButtonText}>ENVIAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    topBar: {
        backgroundColor: '#0d5434',
        padding: 10,
        alignItems: 'center',
       
    },
    topBarText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    voltarButton: {
        backgroundColor: '#d6d2c4', //creme
        padding: 15,
        marginBottom: 15,

    },
    enviarButton: {
        backgroundColor: '#0d5434', //verde musgo
        padding: 20,
        borderRadius: 40,
        color: 'white',
    },
    enviarButtonText: {
        color: 'white',
    },
    voltarButtonText: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    image: {
        width: 70,
        height: 60,
    },
    denunContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 200,
        backgroundColor: '#eee'

    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#00B912',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    header: {
        color: 'green',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerdescri: {
        color: 'black',
        fontSize: 15,
        fontWeight: 400,
        textAlign: 'center',
    },

});
export default RealizaDenuncia;
