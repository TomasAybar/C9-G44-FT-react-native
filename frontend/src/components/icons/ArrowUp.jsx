import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ArrowUp = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19.92 15.09 13.4 8.57c-.77-.77-2.03-.77-2.8 0l-6.52 6.52"
      stroke="#D6F066"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
