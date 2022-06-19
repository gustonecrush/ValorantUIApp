import React, { useState } from "react";
import { useFonts } from "expo-font";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState("Popular");

  const [loaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const MenuText = ({ menu }) => (
    <TouchableOpacity
      style={
        (styles.menuTextWrapper,
        menu == activeMenu
          ? styles.menuTextWrapperActive(activeMenu)
          : styles.menuTextWrapperActive())
      }
      onPress={() => setActiveMenu(menu)}
    >
      <Text
        style={
          menu == activeMenu ? styles.menuText(activeMenu) : styles.menuText()
        }
      >
        {menu}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.menuWrapper}>
      <MenuText menu={"Popular"} />
      <MenuText menu={"New One"} />
      <MenuText menu={"More"} />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 20,
  },
  menuText: (activeMenu) => ({
    fontFamily: "Poppins-Bold",
    fontSize: 17,
    color: activeMenu ? "#E55566" : "#B5B8BE",
  }),
  menuTextWrapperActive: (activeMenu) => ({
    borderBottomWidth: activeMenu ? 6 : 0,
    borderBottomColor: "#E55566",
    paddingVertical: activeMenu ? 5 : 0,
  }),
});
