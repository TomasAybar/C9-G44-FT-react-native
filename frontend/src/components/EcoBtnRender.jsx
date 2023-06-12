import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { useToggleButtom } from '../hooks/useToggleButtom';
import theme from '../themes/theme';

export const EcoBtnRender = ({
  text1 = 'text1',
  text2 = 'text2',
  w1 = 0.4,
  w2 = 0.4,
  render1 = <></>,
  render2 = <></>,
  fs = 16,
}) => {
  const { width, height } = useWindowDimensions();

  const [btnActive, setBtnActive] = useState(true);

  return (
    <>
      <View style={style.containerBtn}>
        <TouchableOpacity
          style={[
            style.toucheable,
            btnActive ? style.touchableActive : style.touchableInactive,
            { width: width * w1 },
          ]}
          onPress={() => setBtnActive(!btnActive)}
        >
          <Text
            style={[
              style.text,
              btnActive ? style.textActive : style.textInactive,
              { fontSize: fs },
            ]}
          >
            {text1}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            style.toucheable,
            btnActive ? style.touchableInactive : style.touchableActive,
            { width: width * w2 },
          ]}
          onPress={() => setBtnActive(!btnActive)}
        >
          <Text
            style={[
              style.text,
              btnActive ? style.textInactive : style.textActive,
              { fontSize: fs },
            ]}
          >
            {text2}
          </Text>
        </TouchableOpacity>
      </View>
      {btnActive ? render1 : render2}
    </>
  );
};

export const EcoBtnRenderToggle = ({
  text1 = 'text1',
  text2 = 'text2',
  text3 = 'text3',
  w1 = 0.2,
  w2 = 0.2,
  w3 = 0.2,
  fs = 16,
}) => {
  // const [btnActive, setBtnActive] = useState(true)

  const { btnActive1, btnActive2, btnActive3, desactive } = useToggleButtom();

  const { width, height } = useWindowDimensions();

  return (
    <>
      <View style={style.containerBtnToggle}>
        <TouchableOpacity
          style={[
            style.toucheable,
            btnActive1 ? style.touchableInactive : style.touchableActive,
            { width: width * w1 },
          ]}
          onPress={() => desactive(1)}
        >
          <Text
            style={[
              style.text,
              btnActive1 ? style.textInactive : style.textActive,
              { fontSize: fs },
            ]}
          >
            {text1}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            style.toucheable,
            btnActive2 ? style.touchableInactive : style.touchableActive,
            { width: width * w2 },
          ]}
          onPress={() => desactive(2)}
        >
          <Text
            style={[
              style.text,
              btnActive2 ? style.textInactive : style.textActive,
              { fontSize: fs },
            ]}
          >
            {text2}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            style.toucheable,
            btnActive3 ? style.touchableInactive : style.touchableActive,
            { width: width * w3 },
          ]}
          onPress={() => desactive(3)}
        >
          <Text
            style={[
              style.text,
              btnActive3 ? style.textInactive : style.textActive,
              { fontSize: fs },
            ]}
          >
            {text3}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  toucheable: {
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 12,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableActive: {
    backgroundColor: theme.colors.yellowPrimary,
  },
  touchableInactive: {
    backgroundColor: theme.colors.appBackground,
    borderWidth: 1,
    borderColor: theme.colors.yellowPrimary,
  },
  text: {
    textAlign: 'center',
    // fontSize: fs,
    lineHeight: 24,
  },
  textActive: {
    color: '#000',
  },
  textInactive: {
    color: theme.colors.yellowPrimary,
  },
  containerBtn: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 40,
    marginTop: 15,
    width: '100%',
  },
  containerBtnToggle: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});
