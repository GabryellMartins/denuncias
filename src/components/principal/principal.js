import React from 'react';
import {
  View,
  Text,  
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'; 

import arcoires from '../../../assets/arcoires.png';

const Principal = ({ navigation }) => {
  const handleTeladenuncia = () => {
    console.log('');
  };
  const handleAnalisardenuncia = () => {
    console.log('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
       <Image source={arcoires} style={styles.image} />
        <Text style={styles.topBarText}>Denuncias Arco-Iris</Text>
       
        <Text style={styles.topBarText}>(14)3477-1128</Text>
      </View>

      <View style={styles.bgView}>
          <Text style={styles.topDenunciaText}>CANAL DE</Text>
          <Text style={styles.topDenunciaText}>DENUNCIAS</Text>
      </View>

      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>

        <Text style={styles.vejaDen}>VEJA SUAS DENUNCIAS</Text>
        <Text style={{...styles.vejaDen, paddingBottom:40}}>REALIZADAS AQUI</Text>

        <TouchableOpacity onPress={() => navigation.navigate('ListaDenuncias')}
                          style={{...styles.bifeButton, borderRadius:40}}>

          <Text style={{color:'#FFF',
                        padding:20,
                        textAlign:'center',
                        fontSize:20,
                        fontWeight:'bold'}}>Visualizar Denúncia</Text>

        </TouchableOpacity>
        </View>

        <Text style={{...styles.vejaDen, padding:60,}}>FAÇA SUA DENÚNCIA CLICANDO ABAIXO: </Text>

        <TouchableOpacity onPress={() => navigation.navigate('RealizaDenuncia')}
                          style={styles.bifeButton}>
          <Text style={styles.botaoNovo}>Fazer Denúncia</Text>
        </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#eee'
  },
  bgView:{
    justifyContent:'center', 
    alignItems:'center', 
    padding:20, 
    backgroundColor:'#d6d2c4' //creme
  },
  topBar: {
    backgroundColor: '#0d5434', //verde musgo
    padding: 15,
    alignItems: 'center',
    paddingTop:20
  },
  topBarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  image: {
    width: 70,
    height: 60,
    margin:15
  },
  topDenunciaText: {
    color: '#0d5434', //verde musgo
    alignItems: 'center',
    fontSize:25,
    fontWeight:'bold'
  },
  vejaDen: {
    color: 'green',
    textAlign:'center',
    fontSize:18

  },
  bifeButton: {
    backgroundColor: '#0d5434', //verde musgo
  },
  botaoNovo:{
    color:'#FFF',
    padding:20,
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'
  }
});

export default Principal;
