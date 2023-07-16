import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import colours from "../components/Colours";
import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

const ActivityViewer = ({ info }) => {
  const [name, setName] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    setName(info.summary);
  }, [info.summary]);

  useEffect(() => {
    setEnd(info.dtend);
  }, [info.dtend]);

  useEffect(() => {
    setStart(info.dtstart);
  }, [info.dtstart]);

  const navigateToForum = () => {
    navigation.navigate("ForumViewer", { info }); // Pass 'info' directly without nesting
  };

  return (
    <View style={{ alignItems: "center", paddingBottom: 15 }}>
      <Pressable onPress={navigateToForum}>
        <View
          style={{
            backgroundColor: "rgba(128, 128, 128, 0.1)",
            borderRadius: 20,
            width: 365,
            height: 70,
            justifyContent: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={styles.subtitle}>{name}</Text>
            <Text style={styles.subtitle1}>
              {start} to {end}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ActivityViewer;

const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    fontSize: 50,
    color: colours.white,
    fontFamily: "LatoBold",
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: colours.white,
    fontFamily: "LatoRegular",
    justifyContent: "center",
  },
  subtitle1: {
    fontSize: 16,
    color: colours.white,
    fontFamily: "LatoRegular",
    justifyContent: "center",
  },
});
