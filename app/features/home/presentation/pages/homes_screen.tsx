import React, { useEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../core/store/store";
import { getPost } from "../state/home_viewmodel";
import TalkrCard from "./home_component";
import Ionicons from "react-native-vector-icons/Ionicons";


const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { talkrList, talkrListLoading, talkrListError } = useSelector(
    (state: RootState) => state.home
  );

  // Fetch posts when component mounts
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  if (talkrListLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (talkrListError) {
    return <Text>Error: {talkrListError}</Text>;
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={talkrList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TalkrCard talkr={item} />}
      />
      <TouchableOpacity style={styles.fab} onPress={() => console.log("FAB Pressed!")}>
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

      fab: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "#000000FF", // Change color as needed
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5, // Android shadow
        shadowColor: "#000", // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
});

export default HomeScreen;
