import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const AddCircle = (props) => (
  <Svg
    width={52}
    height={52}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M26 47.667c11.916 0 21.666-9.75 21.666-21.667 0-11.917-9.75-21.667-21.666-21.667-11.917 0-21.667 9.75-21.667 21.667 0 11.917 9.75 21.667 21.667 21.667ZM17.333 26h17.333M26 34.667V17.333'
      stroke='#D6F066'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
