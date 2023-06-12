import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const LogoutProfile = (props) => (
  <Svg
    width={44}
    height={44}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.317 13.86c.568-6.6 3.96-9.295 11.385-9.295h.238c8.195 0 11.477 3.282 11.477 11.477v11.953c0 8.195-3.282 11.477-11.477 11.477h-.238c-7.37 0-10.762-2.659-11.367-9.149M27.5 22H6.637M10.725 15.858 4.583 22l6.142 6.142"
      stroke="#D6F066"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
