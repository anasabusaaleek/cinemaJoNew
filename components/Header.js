import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={{ marginBottom: 55 }}>
      <ImageBackground
        style={{ height: 200, resizeMode: "contain" }}
        source={{
          uri: "https://image.tmdb.org/t/p/original/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg ",
        }}
      >
        <Pressable
          style={{
            height: 90,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 5,
            width: "90%",
            top: 160,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Releasing in 3 Day
              </Text>
              <Text
                style={{ marginVertical: 5, fontSize: 16, fontWeight: "700" }}
              >
             Fast X
              </Text>
              <Text style={{ fontSize: 15, color: "gray", fontWeight: "500" }}>
            
              </Text>
            </View>
            <Pressable
              style={{
                backgroundColor: "#ffc40c",
                padding: 10,
                borderRadius: 6,
                marginRight: 10,
              }}
            >
              <Text>BOOK</Text>
            </Pressable>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
