import React from "react";
import { useFonts } from "expo-font";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Menu from "../components/Menu";
import Agents from "../../assets/data/Agents";
import { ScrollView } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#0F1923", flex: 1 }}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <StatusBar style="light"></StatusBar>

        {/* Icon Menu */}
        <TouchableOpacity style={styles.menuIcon}>
          <Feather name="menu" size={30} color={"#FFF"} />
        </TouchableOpacity>

        {/* Header */}
        <View style={styles.headerWrapper}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/valorant-logo.png")}
              style={{ width: 80, height: 80, resizeMode: "cover" }}
            />
          </TouchableOpacity>

          <Text style={styles.headerText}>Choose your{"\n"}awesome agent</Text>
        </View>

        {/* Menu */}
        <Menu />

        {/* Agents */}
        {/* <ScrollView vertical showsVerticalScrollIndicator={false}> */}
        <View style={styles.agentsWrapper}>
          {Agents.map((agent, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card(agent.colors[0], index)}
              onPress={() => navigation.navigate("Details", { item: agent })}
            >
              <View
                colors={[agent.colors[0], agent.colors[1]]}
                style={styles.card(agent.colors[0], index)}
              >
                <Image source={{ uri: agent.pict }} style={styles.agentPict} />
                <View style={styles.agentInfoWrapper}>
                  <Text style={styles.agentName}>{agent.name}</Text>
                  <Text style={styles.agentRole}>{agent.role.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  menuIcon: {
    position: "absolute",
    right: 20,
    top: 60,
  },
  headerWrapper: {
    width: "100%",
    alignItems: "center",
    marginTop: 50,
  },
  headerText: {
    fontFamily: "Poppins-Bold",
    fontSize: 30,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 25,
  },
  agentsWrapper: {
    marginTop: 80,
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  agentPict: {
    width: 150,
    height: 250,
    resizeMode: "cover",
    position: "absolute",
    bottom: 15,
    overflow: "visible",
  },
  agentName: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    color: "#FFFF",
    letterSpacing: 3,
  },
  agentRole: {
    fontFamily: "Poppins-Regular",
    color: "#FFF",
    fontSize: 14,
  },
  card: (color, index) => ({
    width: 154,
    margin: 10,
    paddingHorizontal: 15,
    backgroundColor: color,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
    overflow: "visible",
    borderTopLeftRadius: index % 2 == 0 ? 0 : 70,
    borderBottomRightRadius: index % 2 == 0 ? 0 : 50,
    borderTopRightRadius: index % 2 == 0 ? 70 : 0,
    borderBottomLeftRadius: index % 2 == 0 ? 50 : 0,
  }),
  container: (index) => ({
    borderTopLeftRadius: index % 2 == 0 ? 0 : 100,
    borderBottomRightRadius: index % 2 == 0 ? 0 : 100,
    borderTopRightRadius: index % 2 == 0 ? 100 : 0,
    borderBottomLeftRadius: index % 2 == 0 ? 100 : 0,
    overflow: "hidden",
  }),
  agentInfoWrapper: {
    position: "absolute",
    bottom: 15,
  },
});
