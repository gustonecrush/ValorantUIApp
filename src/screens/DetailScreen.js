import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { TouchableOpacity } from "react-native";

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params;

  const [loaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ backgroundColor: "#0F1923", flex: 1 }}>
      {/* Header */}
      <View style={styles.headerWrapper(item.colors[0])}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ zIndex: 999, position: "relative" }}
        >
          <Feather
            name="arrow-left"
            size={30}
            color="#FFF"
            style={{ zIndex: 999 }}
          />
        </TouchableOpacity>

        <View style={styles.agentInfo}>
          <Text
            style={{
              fontSize: 35,
              color: "#FFF",
              fontFamily: "Poppins-Bold",
              letterSpacing: 7,
              zIndex: 999,
            }}
          >
            {item.name}
          </Text>
          <View style={styles.agentRole}>
            <Text style={styles.agentRoleName}>{item.role.name}</Text>
          </View>
        </View>

        <Image source={{ uri: item.pict }} style={styles.agentPict} />
        <Image source={{ uri: item.pict }} style={styles.agentPictOpacity} />
      </View>

      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={{ paddingVertical: 40, paddingHorizontal: 20 }}>
          <View style={styles.headerText}>
            <FontAwesome name="circle" color={"#C4C4C4"} size={20} />
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                color: "#FFF",
                fontSize: 18,
                marginLeft: 15,
              }}
            >
              BIOGRAPHY
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              color: "#FFF",
              textAlign: "justify",
              marginTop: 15,
            }}
          >
            {item.biography}
          </Text>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <View style={styles.headerText}>
            <FontAwesome name="circle" color={"#C4C4C4"} size={20} />
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                color: "#FFF",
                fontSize: 18,
                marginLeft: 15,
              }}
            >
              SPECIAL ABILITIES
            </Text>
          </View>

          <View style={{ marginTop: 20 }}>
            {item.abilities.map((item) => (
              <AbilityWrapper key={item.id} item={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const AbilityWrapper = ({ item }) => (
  <View style={styles.abilityWrapper}>
    <Image source={item.icon} style={{ width: 25, height: 25 }} />
    <View style={styles.descWrapper}>
      <Text style={{ fontFamily: "Poppins-Bold", fontSize: 11, color: "#FFF" }}>
        {item.name.toUpperCase()}
      </Text>
      <Text
        style={{ fontFamily: "Poppins-Regular", fontSize: 13, color: "#FFF" }}
      >
        {item.desc}
      </Text>
    </View>
  </View>
);

export default DetailScreen;

const styles = StyleSheet.create({
  abilityWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#13212E",
    borderRadius: 8,
    marginBottom: 20,
    paddingVertical: 20,
    paddingRight: 30,
    paddingLeft: 15,
    width: "100%",
  },
  descWrapper: {
    marginLeft: 10,
  },
  headerWrapper: (color) => ({
    paddingHorizontal: 30,
    paddingTop: 50,
    height: "30%",
    backgroundColor: color,
    overflow: "hidden",
  }),
  headerText: {
    flexDirection: "row",
    alignItems: "center",
  },
  agentRole: {
    backgroundColor: "#1F2052",
    padding: 7,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    zIndex: 999,
  },
  agentRoleName: {
    color: "#FFF",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    zIndex: 999,
  },
  agentInfo: {
    position: "absolute",
    bottom: 40,
    left: 30,
    zIndex: 999,
  },
  agentPict: {
    resizeMode: "cover",
    width: 500,
    height: 800,
    position: "absolute",
    zIndex: 88,
    top: 45,
    left: 40,
  },
  agentPictOpacity: {
    resizeMode: "cover",
    width: 600,
    height: 800,
    position: "absolute",
    zIndex: 44,
    left: -250,
    top: -200,
    opacity: 0.3,
  },
});
