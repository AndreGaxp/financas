import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from './styles';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

export default function SignIn() {
  const navigation = useNavigation();
  const { loadingAuth, signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background>

      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled>
        <Logo
          source={require('../../assets/Logo.png')}
        />

        <AreaInput>
          <Input
            placeholder='Seu email'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder='Sua senha'
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.6} onPress={handleLogin}>
          <SubmitText>
            Acessar
          </SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>
            Criar uma conta gratuita
          </LinkText>
        </Link>

      </Container>

    </Background>
  );
}