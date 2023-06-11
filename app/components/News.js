import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  Linking,
  Pressable,
  StyleSheet,
} from "react-native";
import { color } from "react-native-reanimated";
import axios from "axios";
import colours from "./Colours";
import { ScrollView } from "react-native-gesture-handler";

const News = () => {
  const [imageData, setImageData] = useState(null);

  {
    /* Click on image to go to news site */
  }
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  {
    /* Fetching API */
  }
  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await axios.get(
          "https://api.spaceflightnewsapi.net/v4/articles/",
          {
            params: {
              limit: 5,
            },
          }
        );
        setImageData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImageData();
  }, []);

  {
    /* If fail */
  }
  if (!imageData) {
    return (
      <View>
        <Text style={{ color: colours.gray }}>Loading...</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: "rgba(128, 128, 128, 0.1)",
        borderRadius: 20,
        width: 358,
        height: 170,
      }}
    >
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <Pressable onPress={() => handlePress(imageData.results[0].url)}>
            <Image
              source={{ uri: imageData.results[0].image_url }}
              style={styles.image}
            />
            {/* Image title for reference */}
            <Text style={styles.textContainer}>
              {imageData.results[0].title}
            </Text>
          </Pressable>
        </View>

        <View style={styles.container}>
          <Pressable onPress={() => handlePress(imageData.results[1].url)}>
            <Image
              source={{ uri: imageData.results[1].image_url }}
              style={styles.image}
            />
            {/* Image title for reference */}
            <Text style={styles.textContainer}>
              {imageData.results[1].title}
            </Text>
          </Pressable>
        </View>

        <View style={styles.container}>
          <Pressable onPress={() => handlePress(imageData.results[2].url)}>
            <Image
              source={{ uri: imageData.results[2].image_url }}
              style={styles.image}
            />

            <View>
              {/* Image title for reference */}
              <Text style={styles.textContainer}>
                {imageData.results[2].title}
              </Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.container}>
          <Pressable onPress={() => handlePress(imageData.results[3].url)}>
            <Image
              source={{ uri: imageData.results[3].image_url }}
              style={styles.image}
            />
            {/* Image title for reference */}
            <Text style={styles.textContainer}>
              {imageData.results[3].title}
            </Text>
          </Pressable>
        </View>

        <View style={styles.container}>
          <Pressable onPress={() => handlePress(imageData.results[4].url)}>
            <Image
              source={{ uri: imageData.results[4].image_url }}
              style={styles.image}
            />
            {/* Image title for reference */}
            <Text style={styles.textContainer}>
              {imageData.results[4].title}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    marginTop: 5,
    width: 200,
  },
  image: {
    width: 200,
    height: 75,
  },
  textContainer: {
    color: colours.white,
    backgroundColor: colours.black,
    height: 70,
    width: 200,
    textAlign: "center",
    fontFamily: "LatoBold",
    paddingBottom: 5,
  },
});

export default News;
