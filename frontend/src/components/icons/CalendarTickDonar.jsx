import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CalendarTickDonar = (props) => (
  <Svg
    width={54}
    height={52}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18 4.333v6.5M36 4.333v6.5M7.875 19.695h38.25M49.5 41.167a8.262 8.262 0 0 1-1.305 4.463c-1.553 2.513-4.41 4.203-7.695 4.203-2.273 0-4.343-.801-5.917-2.166a7.867 7.867 0 0 1-1.778-2.037 8.262 8.262 0 0 1-1.305-4.463c0-4.789 4.028-8.667 9-8.667 2.7 0 5.108 1.148 6.75 2.947 1.395 1.538 2.25 3.531 2.25 5.72Z"
      stroke="#D6F066"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m36.99 41.167 2.228 2.145 4.792-4.269"
      stroke="#D6F066"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M47.25 18.417v17.03A9.113 9.113 0 0 0 40.5 32.5c-4.972 0-9 3.878-9 8.667 0 1.625.473 3.163 1.305 4.463a7.865 7.865 0 0 0 1.778 2.037H18c-7.875 0-11.25-4.334-11.25-10.834V18.417c0-6.5 3.375-10.834 11.25-10.834h18c7.875 0 11.25 4.334 11.25 10.834Z"
      stroke="#D6F066"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M26.99 29.683h.02M18.662 29.683h.02M18.662 36.183h.02"
      stroke="#D6F066"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
