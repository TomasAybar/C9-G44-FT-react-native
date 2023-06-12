import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const StarFilled = (props) => (
  <Svg
    width={24}
    height={25}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M5.3 15.382c.35.35.55 1.05.44 1.54l-.52 2.25c-.04.2-.313 2.31-.17 2.7.11.3.28.53.51.7.61.45 1.56.34 2.67-.31l2.93-1.74c.46-.27 1.22-.27 1.68 0l2.93 1.74c.66.39 1.26.58 1.77.58.35 0 .65-.09.9-.27.62-.45.8-1.39.51-2.64l-.69-3.01c-.12-.49.08-1.18.44-1.54l2.42-2.43c.76-.76 1.06-1.57.84-2.27-.23-.7-.94-1.18-2-1.36l-1.01-.17c-.63-.11-2.33-.39-2.62-.56-.29-.17-.56-.42-.69-.68l-1.72-3.45c-.5-.99-1.18-1.54-1.92-1.54s-1.42.55-1.92 1.54l-1.72 3.45c-.21.41-.76.81-1.21.89l-3.12.52c-1.06.18-1.77.66-2 1.36-.22.7.08 1.51.84 2.27l2.43 2.43Z'
      fill='#D6F066'
    />
  </Svg>
)

export default StarFilled
