import React, { useContext, useState } from 'react'; 
import { View, Text, TextInput, Button } from 'react-native'; 
import { AuthContexto } from '../contextos/authContexto';

const LoginScreen = () => { 
    const [nombreUsuario, setNombreUsuario] = useState(''); 
    const { iniciarSesion } = useContext(authContexto); 
    const handleLogin = () => { 
        iniciarSesion({ nombre: nombreUsuario }); 
    };
    
    return ( 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 
'center' }}> 
            <Text>Iniciar sesión </Text>  
            <TextInput placeholder="Usuario"
                placeholder="Usuario" 
                value={nombreUsuario} 
                onChangeText={setNombreUsuario}
                style={{ borderWidth: 1, padding: 10, marginVertical: 10, width: '80%' }} 
        />
            <Button title="Ingresar " onPress={handleLogin} /> 
        </View>
    );
};
export default LoginScreen; 