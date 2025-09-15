import colors from "@/styles/colors";
import React from "react";
import { StyleSheet, View } from "react-native";

/*
  This separator will be used as a visual to separate
  the rows in flatlist
*/

type propsType = {
  color?: string;
}

const ListItemSeparator: React.FC<propsType> = ({color}) => {
  return <View style={[styles.separator,
    {backgroundColor: color || colors.theme.light.text}
  ]}/>;
};

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    height: 3,
    width: "100%" // 100% of the flatlist
  },
});
