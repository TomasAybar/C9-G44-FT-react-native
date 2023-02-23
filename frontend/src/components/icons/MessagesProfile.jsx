import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const MessagesProfile = (props) => (
	<Svg
		width={44}
		height={44}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<Path
			d='M40.333 11.458v9.35c0 2.329-.77 4.29-2.145 5.647-1.356 1.375-3.318 2.145-5.646 2.145v3.318c0 1.247-1.394 1.999-2.42 1.302l-1.779-1.173a6.653 6.653 0 0 0 .239-1.852v-7.462c0-3.74-2.494-6.233-6.234-6.233H9.9c-.257 0-.495.018-.733.037v-5.079c0-4.675 3.116-7.791 7.791-7.791h15.584c4.675 0 7.791 3.116 7.791 7.791Z'
			stroke='#000'
			strokeWidth={3}
			strokeMiterlimit={10}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<Path
			d='M28.582 22.733v7.462c0 .66-.074 1.283-.239 1.852-.678 2.695-2.915 4.381-5.995 4.381h-4.986l-5.537 3.685C11 40.682 9.9 40.077 9.9 39.087v-2.659c-1.87 0-3.428-.623-4.51-1.705-1.1-1.1-1.723-2.658-1.723-4.528v-7.462c0-3.483 2.163-5.885 5.5-6.196.238-.019.476-.037.733-.037h12.448c3.74 0 6.234 2.493 6.234 6.233Z'
			stroke='#000'
			strokeWidth={3}
			strokeMiterlimit={10}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</Svg>
)
