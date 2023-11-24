import React, { useState } from 'react';
import { View, Text, TextInput,Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import arcoires from '../../../assets/arcoires.png';

const ListaDenuncias = ({ navigation }) => {
   const handleTelaPrincipal = () => {
    
    console.log('');
  };
  
  const Dados = [
    
  { endereco: 'Rua Ines Nunes Moreno', descricao: 'Descarte Irregular de Lixo', status: 'Finalizado' , data: '2023-09-28' },
  { endereco: 'Rua José Demori', descricao: 'Buraco na Rua', status: 'Em Processo',data: '2023-09-29' },
  
  // Adicione mais dados conforme necessário
];

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        
        <Image  
        source={arcoires}
        style={styles.image}
        />
        <Text style={styles.topBarText}>Denuncias Arco-Iris</Text>
         <Text style={styles.topBarText}>📱(14)3477-1128</Text>
      </View>
      
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltarButton}>
          <Text style={styles.voltarButtonText}>◀ VOLTAR</Text>
        </TouchableOpacity>

    

    <View>
      <FlatList
        data={Dados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', padding: 10 }}>
          <Text style={{ flex: 2 }}>{item.data}</Text>
            <Text style={{ flex: 6 }}>{item.endereco}</Text>
            <Text style={{ flex: 3 }}>{item.descricao}</Text>
            <Text style={{ flex: 2 }}>{item.status}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 1 }}>
           <Text style={{ flex: 1, fontWeight: 'bold' }}>Data</Text>
            <Text style={{ flex: 1, fontWeight: 'bold' }}>Endereço</Text>
            <Text style={{ flex: 1, fontWeight: 'bold' }}>Descrição</Text>
            <Text style={{ flex: 0, fontWeight: 'bold' }}>Status</Text>
          </View>
        )}
      />
    </View>

        
      </View>
   
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#eee',
  },
  topBar: {
    backgroundColor: '#0d5434',
    padding: 15,
    alignItems: 'center',
  },
  topBarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  
   image: {
    width: 70,
    height: 60,  
    
  },
   voltarButtonText: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
   voltarButton: {
    backgroundColor: '#d6d2c4', //creme
    padding: 20, 

  },

});

export default ListaDenuncias;
