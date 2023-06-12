import React, { useState, useEffect } from 'react'
import StyledView from '../../styledComponents/StyledView'
import {
  AlertLoading,
  AlertLoadingCompleted
} from '../../components/AlertLoading'
import { useNavigation } from '@react-navigation/native'
import { useVenderStore } from '../../store/venderStore'

export const CongratsScreen = () => {
  const navigator = useNavigation()
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    setTimeout(() => setCompleted(true), 3000)
  }, [])

  const clearProduct = useVenderStore((state) => state.clearProduct)

  const btnVolverInicio = () => {
    navigator.popToTop()
    clearProduct()
  }

  return (
    <StyledView dark height100 justifyContent='center'>
      {completed
        ? (
          <AlertLoadingCompleted
            onPress1={() => navigator.navigate('ArticuloPublicadoVender')}
            onPress2={btnVolverInicio}
            btn1Text='Ver mi publicación'
            btn2Text='Volver al inicio'
            title='¡Felicitaciones!'
            body='Tu producto ya se encuentra publicado'
            img={false}
          />
          )
        : (
          <AlertLoading
            title='Preparando publicación'
            body='En unos instantes verás tu producto publicado.'
            btnCancel={false}
          />
          )}
    </StyledView>
  )
}
