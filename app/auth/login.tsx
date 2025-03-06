import { Button, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';
import React, { useContext, useState } from 'react';
import { inputBackgroundColor, textColor } from '@/typography';

// import { AuthContext } from '../../context/AuthProvider';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const { login } = useContext(AuthContext);
  const router = useRouter();

  console.log('login route mounted')

  const handleLogin = async () => {
    // await login(email, password);
    router.push('/');

  };

  const colorScheme = useColorScheme()

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16, gap: 24 }}>
      <View style={{gap: 16}}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} 
        style={{color: textColor(colorScheme as string), backgroundColor: inputBackgroundColor(colorScheme as string), paddingHorizontal: 12, height: 50, borderRadius: 7}} />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={{color: textColor(colorScheme as string), backgroundColor: inputBackgroundColor(colorScheme as string), paddingHorizontal: 12, height: 50,  borderRadius: 7}}
      />
        </View>

      <View style={{gap: 16}}>
        
      <TouchableOpacity  onPress={handleLogin} style={{backgroundColor: '#891919',  padding: 12, borderRadius: 12, width: '100%',}}>
        <Text style={{color: textColor(colorScheme as string),  fontSize: 18, borderRadius: 12, width: '100%', textAlign: 'center'}}>Login</Text>
      </TouchableOpacity>

       <TouchableOpacity  onPress={() => router.push('/auth/signup')} style={{backgroundColor: '#891919a0',  padding: 12, borderRadius: 12, width: '100%',}}>
        <Text style={{color: textColor(colorScheme as string),  fontSize: 18, borderRadius: 12, width: '100%', textAlign: 'center'}}>Sign Up</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
