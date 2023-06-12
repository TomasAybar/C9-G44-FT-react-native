import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const StarProfile = (props) => (
  <Svg
    width={44}
    height={44}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m25.172 6.435 3.226 6.453c.44.899 1.614 1.76 2.604 1.925l5.848.972c3.74.623 4.62 3.337 1.925 6.013l-4.547 4.547c-.77.77-1.191 2.255-.953 3.318l1.302 5.629c1.026 4.455-1.339 6.178-5.28 3.85l-5.482-3.245c-.99-.587-2.622-.587-3.63 0l-5.482 3.245c-3.923 2.328-6.306.586-5.28-3.85l1.302-5.629c.238-1.063-.183-2.548-.953-3.318l-4.547-4.547c-2.677-2.676-1.815-5.39 1.925-6.013l5.848-.972c.972-.165 2.145-1.026 2.585-1.925l3.227-6.453c1.76-3.502 4.62-3.502 6.362 0Z"
      stroke="#000"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
