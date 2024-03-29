import React, { useEffect, useState } from "react";
import { View, Image, Text, Pressable, Linking } from "react-native";
import axios from "axios";
import colours from "./Colours";

const NasaImage = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod",
          {
            params: {
              api_key: "KgvkWhD1QgBtCI8Di2V5cHwy0ApvarZcRdNVQnyc",
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

  if (!imageData) {
    return (
      <View>
        <Text style={{ color: colours.gray }}>Loading...</Text>
      </View>
    );
  }

  const handlePress = () => {
    Linking.openURL("https://apod.nasa.gov/apod/astropix.html");
  };

  return (
    <Pressable onPress={handlePress}>
      <Image
        source={{ uri: imageData.url }}
        style={{ width: 350, height: 200, paddingBottom: 10, borderRadius: 10 }}
      />
    </Pressable>
  );
};

export default NasaImage;
