import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ActivityIndicator, Image, ScrollView, TouchableOpacity, View, Text, Platform, Dimensions } from 'react-native'
// import StyledText from '../styledComponents/StyledText'
// import StyledView from '../styledComponents/StyledView'
// import StyledTextInput from '../styledComponents/StyledTextInput'
import { ProductCard } from '../../components/ProductCard'
import Search from '../../components/icons/Search.jsx'
import { CategoriasCardHome } from '../../components/CategoriasCardHome'
import { useHome } from '../../hooks/useHome'
import theme from '../../themes/theme'
import { Loader } from '../../components/Loader'
import { InputSearch } from '../../components/inputs/InputSearch'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
// import { StyledTextInput } from '../styledComponents/StyledTextInput'

const screenWidth = Dimensions.get('window').width;

export const HomeScreen = () => {
  const navigator = useNavigation()

  const { top } = useSafeAreaInsets();

  const { products, isLoading } = useHome()

  const [term, setTerm] = useState('');

  // console.log(products)
  // console.log(products.length)

  return (
    <>
    {
      isLoading
      ? <Loader />
      : <ScrollView style={{ backgroundColor: theme.colors.appBackground, flex: 1 }}>
          <View style={{ paddingHorizontal: 25 }}>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              
              <InputSearch
                  onDebounce={(value) => setTerm(value)}
                  style={{
                    // position: 'absolute',
                    // zIndex: 999,
                    width: screenWidth - 40, // le resto el margin horizontal
                    top: Platform.OS === 'ios' ? top : top + 5,
                  }}
              />

            {/* <Search
              style={{
                position: 'absolute',
                alignSelf: 'center',
                right: 15
              }}
            /> */}
            </View>

            <View style={{ alignItems: 'center', marginTop: 35 }}>
              <Image
                source={require('../../../assets/homeBanner.png')}
                style={{ width: '100%' }}
              />
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30  }}>
                <Text style={{ fontWeight: '500', color: '#fff' }}>Categorías</Text>

                <TouchableOpacity onPress={() => navigator.navigate('Categorías' as never)}>
                  <Text style={{ fontWeight: '500', color: '#fff' }}>Ver más</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                <ScrollView horizontal  >
                  {products.map((item) => (
                    <CategoriasCardHome
                      type={item.type}
                      key={item._id}
                      img={item.image}
                    />
                  ))}
                </ScrollView>
            </View>

            <View style={{ marginBottom: 30, paddingBottom: 35 }}>

              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>

                  <Text style={{ fontWeight: '500', color: '#fff' }}>Publicados recientemente</Text>
                  
                  <TouchableOpacity
                  activeOpacity={0.7}
                    // onPress={() => navigator.navigate('Categorías' as never)}
                    onPress={() => console.log('navigate')}
                  >
                    <Text style={{ fontWeight: '500', color: '#fff' }}>Ver más</Text>
                  </TouchableOpacity>

              </View>
                

              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <ScrollView horizontal>
                  {products.map((item) => (
                    <ProductCard
                      // flex={1}
                      margin={10}
                      key={item._id}
                      item={item}
                    />
                  ))}
                </ScrollView>
            </View>
            </View>
          </View>
        </ScrollView>
    }
    </>
    
  )
}




