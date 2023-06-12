import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const BagHappyProfile = (props) => (
  <Svg
    width={44}
    height={44}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.583 26.125c0 3.52 2.897 6.417 6.417 6.417s6.417-2.897 6.417-6.417M16.152 3.667l-6.637 6.655M27.848 3.667l6.637 6.655"
      stroke="#000"
      strokeWidth={3}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.667 14.392c0-3.392 1.815-3.667 4.07-3.667h28.526c2.255 0 4.07.275 4.07 3.667 0 3.941-1.815 3.666-4.07 3.666H7.737c-2.255 0-4.07.275-4.07-3.666Z"
      stroke="#000"
      strokeWidth={3}
    />
    <Path
      d="m6.417 18.333 2.585 15.84c.586 3.557 1.998 6.16 7.241 6.16h11.055c5.702 0 6.545-2.493 7.205-5.94l3.08-16.06"
      stroke="#000"
      strokeWidth={3}
      strokeLinecap="round"
    />
  </Svg>
);
