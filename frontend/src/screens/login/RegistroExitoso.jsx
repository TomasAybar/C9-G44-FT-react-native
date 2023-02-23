import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import StyledText from '../../styledComponents/StyledText';
import StyledView from '../../styledComponents/StyledView';
import StyledButtton from '../../styledComponents/StyledButton';
import {Alert, Modal, StyleSheet} from 'react-native';
import theme from '../../themes/theme';

export const RegistroExitoso = () => {
    const [modalVisible, setModalVisible] = useState(false);
  const navigator = useNavigation();

  const handleCloseModal = () => {
    setModalVisible(!modalVisible);
    navigator.navigate('CompletarPerfilScreen');
  };

  const handleCloseModal2 = () => {
    setModalVisible(!modalVisible);
    navigator.navigate('LoginScreen');
  };

    return (
        <StyledView dark>
            <StyledView container center>
            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <StyledView container center >
          <StyledView style={styles.modalView}>
            <StyledText size16 weight700>Atención!</StyledText>
            <StyledText size12>
                Recordá que necesitarás que tu perfil este completo en caso que quieras vender o comprar.</StyledText>
                <StyledButtton
                    white
                    title={'Completar Perfil'}
                    onPress={handleCloseModal}
                ></StyledButtton>
      <StyledButtton
                    black
                    title={'Omitir'}
                    onPress={handleCloseModal2}
                ></StyledButtton>
          </StyledView>
        </StyledView>
      </Modal>
                <StyledText size16 weight700>
                    ¡Felicitaciones!
                </StyledText>
                <StyledText size16 weight700>
                    Tu cuenta fue creada con éxito.
                </StyledText>
                <StyledText size12>
                    Ahora te vamos a pedir unos datos para completar tu perfil.
                </StyledText>
                <StyledButtton
                    white
                    title={'Comenzar'}
                    onPress={() => navigator.navigate('CompletarPerfilScreen')}
                ></StyledButtton>
                <StyledButtton
                    black
                    title={'Omitir'}
                    onPress={() => setModalVisible(true)}
                ></StyledButtton>
            </StyledView>
        </StyledView>
    );
};
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      width: '95%',
      height: '50%' ,
      backgroundColor: theme.colors.greyPrimary,
      borderRadius: 20,
      padding: 35,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    }
  })