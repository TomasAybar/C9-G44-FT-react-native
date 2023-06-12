import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  Image,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
  ScrollView
} from 'react-native'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import theme from '../../themes/theme'
import { StarProfile } from '../../components/icons/StarProfile'
import { TagProfile } from '../../components/icons/TagProfile'
import { MessagesProfile } from '../../components/icons/MessagesProfile'
import { SettingsProfile } from '../../components/icons/SettingsProfile'
import { LogoutProfile } from '../../components/icons/LogoutProfile'
import { BagHappyProfile } from '../../components/icons/BagHappyProfile'
import { useUserStore } from '../../store/userStore'

export const PerfilScreen = () => {
  const navigator = useNavigation()

  const { width } = useWindowDimensions()

  const { firstName, photoUrl } = useUserStore((state) => state.user)

  return (
    <StyledView dark height100>
      <ScrollView>
        <StyledView container center>
          <View style={style.image}>
            <Image
              source={{
                uri: photoUrl || 'http://imgfz.com/i/GqlxX1V.png'
              }}
              style={{ marginBottom: 10 }}
            />
            <StyledText line24 size20>
              ¡Hola {firstName?.charAt(0).toUpperCase() + firstName?.slice(1)}!
            </StyledText>
          </View>

          <View style={style.containerCard}>
            <Pressable
              style={{
                ...style.card,
                width: width * 0.35,
                height: 100
              }}
              onPress={() => navigator.navigate('ComprasScreen')}
            >
              <BagHappyProfile style={style.icon} />

              <StyledText black size25 line32 weight600>
                Compras
              </StyledText>
            </Pressable>

            <Pressable
              style={{
                ...style.card,
                width: width * 0.35,
                height: 100
              }}
              onPress={() => navigator.navigate('VenderScreenPerfil')}
            >
              <TagProfile style={style.icon} />

              <StyledText black size25 line32 weight600>
                Ventas
              </StyledText>
            </Pressable>

            <Pressable
              style={{
                ...style.card,
                width: width * 0.35,
                height: 100
              }}
              onPress={() => navigator.navigate('FavoritosScreen')}
            >
              <StarProfile style={style.icon} />

              <StyledText black size25 line32 weight600>
                Favoritos
              </StyledText>
            </Pressable>

            <Pressable
              style={{
                ...style.card,
                width: width * 0.35,
                height: 100
              }}
              onPress={() => navigator.navigate('MensajesScreen')}
            >
              <MessagesProfile style={style.icon} />

              <StyledText black size25 line32 weight600>
                Mensajes
              </StyledText>
            </Pressable>

            <Pressable
              style={{
                ...style.card,
                width: width * 0.35,
                height: 100
              }}
              onPress={() => navigator.navigate('AyudaScreen')}
            >
              <SettingsProfile style={style.icon} />

              <StyledText black size25 line32 weight600>
                Ayuda
              </StyledText>
            </Pressable>

            <Pressable
              style={{
                ...style.card,
                backgroundColor: theme.colors.greyPrimary,
                borderWidth: 3,
                borderColor: theme.colors.yellowPrimary,
                width: width * 0.35,
                height: 100
              }}
              onPress={() => {
                useUserStore.getState().logout()
                navigator.navigate('LoginStack')
              }}
            >
              <LogoutProfile style={style.icon} />

              <StyledText size25 line32 weight600 yellow>
                Salir
              </StyledText>
            </Pressable>
          </View>
        </StyledView>
      </ScrollView>
    </StyledView>
  )
}

const style = StyleSheet.create({
  image: {
    marginVertical: 20,
    width: '50%',
    alignItems: 'center'
  },
  containerCard: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  card: {
    alignItems: 'center',
    backgroundColor: theme.colors.yellowPrimary,
    borderRadius: 8,
    padding: 9,
    marginBottom: 30
  },
  icon: {
    marginBottom: 6
  },
  dimension: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold'
  }
})
