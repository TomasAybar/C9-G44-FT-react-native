import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  Image,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
  ScrollView,
  Text,
  TouchableOpacity
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

  // const { firstName, photoUrl } = useUserStore((state) => state.user)

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.appBackground }}>
      <ScrollView>
        <View>
          <View style={style.image}>
            <Image
              source={{
                // uri: photoUrl || 'http://imgfz.com/i/GqlxX1V.png'
                uri: 'http://imgfz.com/i/GqlxX1V.png'
              }}
              style={{ marginBottom: 10, width: 75, height: 75 }}
            />
            <Text style={{ color: '#fff', fontSize: 20 }}>
              ¡Hola Tomas!
            </Text>
            {/* <Text>
              ¡Hola {firstName?.charAt(0).toUpperCase() + firstName?.slice(1)}!
            </Text> */}
          </View>

          <View style={style.containerCard}>
            <TouchableOpacity
            activeOpacity={0.8}
              style={{
                ...style.card,
                width: width * 0.35,
                height: 100
              }}
              // onPress={() => navigator.navigate('ComprasScreen')}
              onPress={() => console.log('navigate')}
            >
              <BagHappyProfile style={style.icon} />

              <Text style={{ fontSize: 17 }}>
                Compras
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
            activeOpacity={0.8}
              style={{
                ...style.card,
                width: width * 0.35,
                height: 100
              }}
              // onPress={() => navigator.navigate('VenderScreenPerfil')}
              onPress={() => console.log('navigate')}
            >
              <TagProfile style={style.icon} />

              <Text style={{ fontSize: 17 }}>
                Ventas
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
            activeOpacity={0.8}
              style={{
                ...style.card,
                width: width * 0.35,
                height: 100
              }}
              // onPress={() => navigator.navigate('FavoritosScreen')}
              onPress={() => console.log('navigate')}
            >
              <StarProfile style={style.icon} />

              <Text style={{ fontSize: 17 }}>
                Favoritos
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
            activeOpacity={0.8}
              style={{
                ...style.card,
                width: width * 0.35,
                height: 100
              }}
              // onPress={() => navigator.navigate('MensajesScreen')}
              onPress={() => console.log('navigate')}
            >
              <MessagesProfile style={style.icon} />

              <Text style={{ fontSize: 17 }}>
                Mensajes
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
            activeOpacity={0.8}
              style={{
                ...style.card,
                width: width * 0.35,
                height: 100
              }}
              // onPress={() => navigator.navigate('AyudaScreen')}
              onPress={() => console.log('navigate')}
            >
              <SettingsProfile style={style.icon} />

              <Text style={{ fontSize: 17 }}>
                Ayuda
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
            activeOpacity={0.8}
              style={{
                ...style.card,
                backgroundColor: theme.colors.greyPrimary,
                borderWidth: 3,
                borderColor: theme.colors.yellowPrimary,
                width: width * 0.35,
                height: 100
              }}
              onPress={() => {
                // useUserStore.getState().logout()
                console.log('logout')
                // navigator.navigate('LoginStack')
              }}
            >
              <LogoutProfile style={style.icon} />

              <Text style={{ color: theme.colors.yellowPrimary, fontSize: 17 }}>
                Salir
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
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
