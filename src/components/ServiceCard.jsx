import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ServiceCard = ({ item }) => {
  return (
    <View style={styles.outherContainer}>
      <Text style={styles.title}>{item.title} </Text>
      <Image style={styles.imgStyle} source={item.image} />
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  outherContainer: {
    backgroundColor: "#fff",
    marginLeft: 8,
    width: 140,
    padding: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 13,
    marginBottom: 8,
    color: "#000000",
  },
  imgStyle: {
    width: "100%",
    height: 130,
  },
});
