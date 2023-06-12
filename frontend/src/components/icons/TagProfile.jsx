import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const TagProfile = (props) => (
  <Svg
    width={44}
    height={44}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='m7.645 28.05 8.305 8.305c3.41 3.41 8.947 3.41 12.375 0l8.048-8.048c3.41-3.41 3.41-8.947 0-12.375L28.05 7.645a8.71 8.71 0 0 0-6.6-2.548l-9.167.44a7.084 7.084 0 0 0-6.765 6.728l-.44 9.167a8.808 8.808 0 0 0 2.567 6.618Z'
      stroke='#000'
      strokeWidth={3}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M17.416 22a4.583 4.583 0 1 0 0-9.167 4.583 4.583 0 0 0 0 9.167Z'
      stroke='#000'
      strokeWidth={3}
      strokeLinecap='round'
    />
  </Svg>
)
