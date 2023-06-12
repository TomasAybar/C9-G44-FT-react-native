import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const Dollar = (props) => (
  <Svg
    width={54}
    height={52}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M17.344 28.66c0 2.58 1.98 4.66 4.44 4.66h5.02c2.14 0 3.88-1.82 3.88-4.06 0-2.44-1.06-3.3-2.64-3.86l-8.06-2.8c-1.58-.56-2.64-1.42-2.64-3.86 0-2.24 1.74-4.06 3.88-4.06h5.02c2.46 0 4.44 2.08 4.44 4.66M24 12v24'
      stroke='#D6F066'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z'
      stroke='#D6F066'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
