import React from "react";
import { ActivityIndicator, View } from "react-native";
import theme from "../themes/theme";


export const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 999,
      }}
    >
      <ActivityIndicator color={theme.colors.yellowPrimary} size={100} />
    </View>
  );
};