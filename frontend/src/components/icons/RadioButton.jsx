import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import theme from '../../themes/theme'

const RadioButton = ({ completed, ...props }) => (
  <Svg
    width={24}
    height={24}
    fill={completed ? theme.colors.yellowPrimary : theme.colors.appBackground}
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z'
      stroke='#D6F066'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)

export default RadioButton
