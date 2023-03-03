import React, { useEffect, useState } from 'react'
import { products } from '../../assets/data'

export const useToggleButtom = () => {
	const [btnActive1, setBtnActive1] = useState(true)
	const [btnActive2, setBtnActive2] = useState(true)
	const [btnActive3, setBtnActive3] = useState(true)

	// useEffect(() => {
	// 	filter()
	// }, [btnActive1, btnActive2, btnActive3])

	// let productsFilter = []

	const desactive = (state) => {
		switch (state) {
			case 1:
				setBtnActive1(!btnActive1)
				setBtnActive2(btnActive2)
				setBtnActive3(btnActive3)
				break
			case 2:
				setBtnActive2(!btnActive2)
				setBtnActive1(btnActive1)
				setBtnActive3(btnActive3)
				break
			case 3:
				setBtnActive3(!btnActive3)
				setBtnActive1(btnActive1)
				setBtnActive2(btnActive2)
				break

			default:
				break
		}
	}

	// const filter = () => {
	// 	let filtros = []

	// 	if (!btnActive1) {
	// 		filtros.push('hombre')
	// 	} else {
	// 		filtros.splice(filtros.indexOf('hombre'), 1)
	// 	}

	// 	if (!btnActive2) {
	// 		filtros.push('mujer')
	// 	} else {
	// 		filtros.splice(filtros.indexOf('mujer'), 1)
	// 	}

	// 	if (!btnActive3) {
	// 		filtros.push('niños')
	// 	} else {
	// 		filtros.splice(filtros.indexOf('niños'), 1)
	// 	}

	// 	if (filtros.length <= 0) {
	// 		productsFilter = products
	// 		// console.log(productsFilter)
	// 		return
	// 	}

	// 	// if (filtros.includes[('hombre', 'mujer', 'niños')]) {
	// 	// 	console.log('incluye todos')
	// 	// 	productsFilter = products
	// 	// 	return
	// 	// }

	// 	productsFilter = products.filter((product) => {
	// 		for (const filtro of filtros) {
	// 			return product.category.toLowerCase() === filtro.toLowerCase()
	// 		}
	// 	})

	// 	// console.log('filter')
	// 	// console.log(filtros)
	// 	// console.log(productsFilter)
	// }

	return {
		desactive,
		btnActive1,
		btnActive2,
		btnActive3,
		// productsFilter,
	}
}
