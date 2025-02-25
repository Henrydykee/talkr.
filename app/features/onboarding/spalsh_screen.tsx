import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    // Simulate a loading effect, then navigate to the main screen
    const timer = setTimeout(() => {
      navigation.replace("Login"); // Change "Home" to your main screen
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Talkr.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default SplashScreen;