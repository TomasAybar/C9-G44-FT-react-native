import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useVenderStore } from '../store/venderStore'
import * as ImagePicker from 'expo-image-picker'

export const useVender = () => {
  const navigation = useNavigation()

  // Tipo producto
  const [productState, setProductState] = useState(null)
  const [productSize, setProductSize] = useState(null)
  const [productColor, setProductColor] = useState(null)

  const addProp = useVenderStore((state) => state.addProps)

  const nextButtom = () => {
    if (productState && productSize && productColor) {
      navigation.navigate('DescripcionScreen')

      addProp({ state: productState })
      addProp({ size: productSize })
      addProp({ color: productColor })
    } else {
      alert('faltan datos')
    }
  }
  // Tipo producto

  // Foto producto
  const [imageUri, setImageUri] = useState(null)

  const handleChoosePhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.canceled) {
      setImageUri(result.assets[0].uri)
    }
  }

  const nextButtonFotoProduct = () => {
    if (imageUri) {
      navigation.navigate('CategoriaScreenVender')

      addProp({ image: imageUri })
    } else {
      alert('falta img')
    }
  }
  // Foto producto

  // Categoria
  const [productCategory, setProductCategory] = useState(null)
  const [productRubro, setProductRubro] = useState(null)
  const [productType, setProductType] = useState(null)
  const [productBrand, setProductBrand] = useState(null)

  const nextButtomCategory = () => {
    if (productCategory && productRubro && productType) {
      navigation.navigate('TipoProductoScreen')

      addProp({ category: productCategory })
      addProp({ rubro: productRubro })
      addProp({ type: productType })
      addProp({ brand: productBrand })
    } else {
      alert('faltan datos')
    }
  }
  // Categoria

  // Descripcion y precio
  const [description, onChangeDescription] = useState(null)
  const [price, onChangePrice] = useState(null)
  const [profit, onChangeProfit] = useState(null)

  const nextButtonDescription = () => {
    if (description && price && profit) {
      navigation.navigate('MetodoPagoScreen')

      addProp({ description })
      addProp({ price })
      addProp({ profit })
    } else {
      alert('faltan datos')
    }
  }
  // Descripcion y precio

  // Metodo
  const btnNavigate = (metodo) => {
    navigation.navigate('CheckeoFinalScreen')

    addProp({ metodo })
  }
  // Metodo

  return {
    nextButtom,
    setProductState,
    setProductSize,
    setProductColor,
    imageUri,
    handleChoosePhoto,
    nextButtonFotoProduct,
    setProductCategory,
    setProductRubro,
    setProductType,
    setProductBrand,
    nextButtomCategory,
    onChangeDescription,
    description,
    onChangePrice,
    onChangeProfit,
    nextButtonDescription,
    btnNavigate
  }
}
