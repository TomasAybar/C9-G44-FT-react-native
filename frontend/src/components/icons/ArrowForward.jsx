import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const ArrowForward = (props) => (
  <Svg
    width={24}
    height={24}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='m8.91 19.92 6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08'
      stroke='#D6F066'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
