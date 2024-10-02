import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductScreen = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
      <Text
        style={{
          backgroundColor: "blue",
          padding: 10,
          width: 70,
        }}
      >
        geri
      </Text>
    </TouchableOpacity>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
