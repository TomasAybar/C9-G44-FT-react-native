import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LogoEcoModa } from '../../components/icons/LogoEcoModa';
import StyledView from '../../styledComponents/StyledView';
import StyledText from '../../styledComponents/StyledText';
import SyledButton from '../../styledComponents/StyledButton';
import theme from '../../themes/theme';
import { Formik } from 'formik';
import { loginValidationSchema } from '../../validationSchema/validationsRegister';
import { FormikInputValue } from '../../styledComponents/FormikInputValue';
import { Linkeo } from '../../components/Linkeo';
import { AlertLoading } from '../../components/AlertLoading';
import { userRequest } from '../../api/userRequest';
import { useLogin } from '../../hooks/useLogin';

const initialValues = {
  email: 'correo@correo.com',
  password: '12345678',
};

export const LoginScreen = () => {
  const navigator = useNavigation();

  const [alert, setAlert] = useState(false);

  const { postLogin } = useLogin();

  const handleForm = async ({ email, password }) => {
    // console.log(email, password)

    // const res = await userRequest.signIn(email, password)

    // if (res.data.success) {
    // 	navigator.navigate('StackNavigation')
    // } else {
    // 	setAlert(true)
    // }

    const res = postLogin(email, password);

    if (res) {
      navigator.navigate('StackNavigation');
    } else {
      setAlert(true);
    }

    // userIsLogin ? navigator.navigate('StackNavigation') : setAlert(true)
  };

  return !alert ? (
    <KeyboardAwareScrollView
      style={{ backgroundColor: theme.colors.appBackground }}
    >
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={initialValues}
        onSubmit={(values) => handleForm(values)}
      >
        {({ handleSubmit, resetForm, errors }) => {
          return (
            <StyledView container center marginTop={80}>
              <View style={style.logo}>
                <LogoEcoModa />
              </View>

              <StyledText left size12>
                E-mail
              </StyledText>
              <FormikInputValue
                name="email"
                placeholder="E-mail"
                placeholderTextColor="rgba(255,255,255,0.5)"
              />

              <StyledText left size12 marginTop={15}>
                Contraseña
              </StyledText>
              <FormikInputValue
                name="password"
                placeholder="Contraseña"
                placeholderTextColor="rgba(255,255,255,0.5)"
                secureTextEntry
              />

              <View
                style={{
                  ...style.label,
                  marginBottom: 60,
                }}
              >
                <StyledText size12 right>
                  <Linkeo onPress={() => alert('Reestablecer contraseña.')}>
                    ¿Olvidaste tu contraseña?
                  </Linkeo>
                  .
                </StyledText>
              </View>

              <View style={style.btn}>
                <SyledButton
                  white
                  title={'Iniciar sesión'}
                  onPress={handleSubmit}
                ></SyledButton>
              </View>

              <SyledButton
                black
                title={'Registrarme'}
                onPress={() => navigator.navigate('RegistroNombreScreen')}
              ></SyledButton>
            </StyledView>
          );
        }}
      </Formik>
    </KeyboardAwareScrollView>
  ) : (
    <StyledView dark height100 justifyContent={'center'}>
      <AlertLoading
        title="Datos incorrectos"
        body={'Email o contraseña incorrecta'}
        btnText="Volver a intentar"
        onPress={() => setAlert(false)}
        img={false}
      />
    </StyledView>
  );
};

const style = StyleSheet.create({
  logo: {
    marginBottom: 100,
    alignItems: 'center',
  },
  label: {
    marginBottom: 10,
    alignItems: 'flex-start',
    textAlign: 'start',
  },
  input: {
    marginBottom: 12,
  },
  btn: {
    marginBottom: 12,
  },
});
