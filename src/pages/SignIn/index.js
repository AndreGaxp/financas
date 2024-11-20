import { Text, View } from 'react-native';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from './styles';

export default function SignIn() {
  const navigation = useNavigation();
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
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder='Sua senha'
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.6}>
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