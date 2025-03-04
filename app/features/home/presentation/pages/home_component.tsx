import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Talkr } from "../../domain/home";
import { Dimensions } from "react-native";


interface TalkrCardProps {
    talkr: Talkr;
}

const TalkrCard: React.FC<TalkrCardProps> = ({ talkr }) => {
    return (
        <View style={{flexDirection : "column"}}>
              <View style={styles.card}>
            <Image source={{ uri: talkr.user_profiles?.avatar_url ?? "" }} style={styles.avatar} />
            <View style={styles.contentContainer}>
                <Text style={styles.email}>@{talkr.user_profiles?.username}</Text>
                <Text style={styles.content}>{talkr.content}</Text>
                <Text style={styles.timestamp}>
                    {new Date(talkr.created_at).toLocaleString()}
                </Text>
              {   <Image source={{ uri: talkr.image_url ?? "" }} style={styles.imageView} /> } 
            </View>
         
        </View>

        <View style={styles.divider}></View>
        </View>
  
    );
};

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        // backgroundColor: "#fff",
        borderRadius: 10,
        marginVertical: 8,
        // shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 5,
        // elevation: 3,
    },
    divider:{
        width: "100%",
        height: 1,
        backgroundColor: "#ccc",
        marginVertical: 5,

    },
    imageView: {
        width: screenWidth/ 1.3,
        height: 200,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: "#ddd",
        justifyContent: "center",
        alignItems: "center",
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor:  '#000000FF',
    },
    contentContainer: {
        flex: 1,
    },
    email: {
        fontWeight: "bold",
    },
    content: {
        marginVertical: 4,
    },
    timestamp: {
        fontSize: 12,
        color: "gray",
    },
});

export default TalkrCard;
