import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaInicio from './src/components/principal/telainicio';
import Principal from './src/components/principal/principal';
import Login from './src/components/usuarios/login'; 
import CadastroUsuario from './src/components/usuarios/cadastro';
import RealizaDenuncia from './src/components/denuncia/denuncia';
import ListaDenuncias from './src/components/denuncia/listaDenuncia';

const Stack = createNativeStackNavigator();

function APP() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaInicio" component={TelaInicio} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
        <Stack.Screen name="RealizaDenuncia" component={RealizaDenuncia} />
        <Stack.Screen name="ListaDenuncias" component={ListaDenuncias} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default APP;