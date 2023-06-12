import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const CameraDonar = (props) => (
  <Svg
    width={54}
    height={52}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M13.52 44h20.96c5.52 0 7.72-3.38 7.98-7.5l1.04-16.52C43.78 15.66 40.34 12 36 12c-1.22 0-2.34-.7-2.9-1.78l-1.44-2.9C30.74 5.5 28.34 4 26.3 4h-4.58c-2.06 0-4.46 1.5-5.38 3.32l-1.44 2.9A3.287 3.287 0 0 1 12 12c-4.34 0-7.78 3.66-7.5 7.98L5.54 36.5C5.78 40.62 8 44 13.52 44ZM21 16h6'
      stroke='#D6F066'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M24 36c3.58 0 6.5-2.92 6.5-6.5S27.58 23 24 23s-6.5 2.92-6.5 6.5S20.42 36 24 36Z'
      stroke='#D6F066'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
