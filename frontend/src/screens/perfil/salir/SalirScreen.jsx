import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  AlertLoading,
  AlertLoadingCompleted
} from '../../../components/AlertLoading'
import StyledView from '../../../styledComponents/StyledView'

export const SalirScreen = () => {
  const navigator = useNavigation()
  const [loading, setLoading] = useState(false)

  const cerrarCuenta = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setAlert(false)
    }, 3000)
  }

  const [alert, setAlert] = useState(true)

  return (
    <StyledView dark height100 justifyContent='center'>
      {!loading
        ? (
            alert
              ? (
                <AlertLoadingCompleted
                  onPress1={cerrarCuenta}
                  onPress2={() => navigator.goBack()}
                  btn1Text='Si, cerrar cuenta'
                  btn2Text='Volver'
                  title='Atención'
                  body='Tu cuenta EcoModa será dada de baja. ¿Querés cerrar la cuenta de todas formas?'
                  img={false}
                />
                )
              : (
                <AlertLoadingCompleted
                  onPress1={() => navigator.popToTop()}
                  btn1Text='Ir al inicio'
                  title='¡Listo!'
                  body={
              'Tu cuenta fue dada de baja.\nEsperamos volver a verte pronto'
            }
                  img={false}
                  btn2={false}
                />
                )
          )
        : (
          <AlertLoading
            title='Aguarda unos instantes'
            body='Estamos dando de baja tu cuenta'
            btnCancel={false}
          />
          )}
    </StyledView>
  )
}

const styles = StyleSheet.create({})

// ;<StyledView dark height100 justifyContent={'center'}>
// 	{completed ? (
// 		<AlertLoadingCompleted
// 			btn1Nav={'ArticuloPublicadoVender'}
// 			btn1Text={'Ver mi publicación'}
// 			btn2Text={'Volver al inicio'}
// 			title={'¡Felicitaciones!'}
// 			body={'Tu producto ya se encuentra publicado'}
// 			img={false}
// 		/>
// 	) : (
// 		<AlertLoading
// 			title='Preparando publicación'
// 			body={'En unos instantes verás tu producto publicado.'}
// 			btnCancel={false}
// 		/>
// 	)}
// </StyledView>
