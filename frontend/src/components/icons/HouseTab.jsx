import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const HouseTab = (props) => (
  <Svg
    width={24}
    height={24}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M2 22h20'
      stroke='#D6F066'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M2.95 22 3 9.97c0-.61.29-1.19.77-1.57l7-5.45c.72-.56 1.73-.56 2.46 0l7 5.44c.49.38.77.96.77 1.58V22'
      stroke='#D6F066'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinejoin='round'
    />
    <Path
      d='M13 17h-2c-.83 0-1.5.67-1.5 1.5V22h5v-3.5c0-.83-.67-1.5-1.5-1.5ZM9.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1ZM16.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1Z'
      stroke='#D6F066'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinejoin='round'
    />
    <Path
      d='m19 7-.03-3h-4.4'
      stroke='#D6F066'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
