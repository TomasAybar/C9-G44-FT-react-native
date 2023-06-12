import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const MaginPenDonar = (props) => (
  <Svg
    width={54}
    height={52}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M7 41a4.237 4.237 0 0 0 6 0l26-26a4.237 4.237 0 0 0 0-6 4.237 4.237 0 0 0-6 0L7 35a4.237 4.237 0 0 0 0 6ZM36.02 17.98l-6-6'
      stroke='#D6F066'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M17 4.88 20 4l-.88 3 .88 3-3-.88-3 .88.88-3L14 4l3 .88ZM9 16.88l3-.88-.88 3 .88 3-3-.88L6 22l.88-3L6 16l3 .88ZM39 26.88l3-.88-.88 3 .88 3-3-.88-3 .88.88-3-.88-3 3 .88Z'
      stroke='#D6F066'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
