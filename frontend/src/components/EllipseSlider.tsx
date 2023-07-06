import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';

interface Props {
  color: 'primary' | 'transparent';
  style?: StyleProp<ViewStyle>;
}

export const EllipseSlider = ({ color, style }: Props) => {
  return (
    <View
      style={{
        ...(style as any),
        marginHorizontal: 2,
      }}
    >
      <Svg width="10" height="9" viewBox="0 0 10 9" fill="none">
        <Ellipse cx="4.63636" cy="4.5" rx="4.63636" ry="4.5" fill={color === 'primary' ? '#D6F066' : 'rgba(255,255,255,0.5)'} />
      </Svg>
    </View>
  );
};