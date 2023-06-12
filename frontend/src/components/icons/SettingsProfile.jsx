import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const SettingsProfile = (props) => (
  <Svg
    width={44}
    height={44}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M22 27.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z'
      stroke='#000'
      strokeWidth={3}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M3.667 23.613v-3.226a3.494 3.494 0 0 1 3.483-3.484c3.318 0 4.675-2.346 3.007-5.225A3.482 3.482 0 0 1 11.44 6.93l3.172-1.815c1.448-.862 3.318-.348 4.18 1.1l.201.348c1.65 2.879 4.364 2.879 6.032 0l.202-.348c.861-1.448 2.731-1.962 4.18-1.1l3.171 1.815a3.482 3.482 0 0 1 1.284 4.748c-1.669 2.879-.312 5.225 3.006 5.225a3.493 3.493 0 0 1 3.484 3.484v3.226a3.493 3.493 0 0 1-3.484 3.484c-3.318 0-4.675 2.346-3.006 5.225a3.477 3.477 0 0 1-1.284 4.748l-3.171 1.815c-1.449.862-3.319.348-4.18-1.1l-.202-.348c-1.65-2.879-4.363-2.879-6.032 0l-.201.348c-.862 1.448-2.732 1.962-4.18 1.1L11.44 37.07a3.482 3.482 0 0 1-1.283-4.748c1.668-2.879.311-5.225-3.007-5.225a3.494 3.494 0 0 1-3.483-3.484Z'
      stroke='#000'
      strokeWidth={3}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
