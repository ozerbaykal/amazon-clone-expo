import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RecommendProduct from "../assets/recommend.jpg";

const Deal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended deal for you</Text>
      <Image style={styles.imgStyle} source={RecommendProduct} />

      <View style={styles.bottomSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.offDealBtn}>
            <Text style={styles.offDeal}> %18 off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.discountPrice}>1,393₺</Text>

          <Text style={styles.actualPrice}>1.699₺</Text>
        </View>
        <Text style={styles.productName}>
          Nykaa Face Wash Gentle Skin Cleanser for all skin type
        </Text>
        <TouchableOpacity>
          <Text style={styles.allDeals}>See all deals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Deal;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: "#00000",
    fontWeight: "bold",
    marginBottom: 10,
  },
  imgStyle: {
    height: 250,
    width: "100%",
  },
  bottomSection: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  offDealBtn: {
    backgroundColor: "#be0201",
    width: 70,
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },

  offDeal: {
    fontSize: 12,
    color: "#ffff",
  },
  deal: {
    color: "#be0201",
    fontWeight: "600",
    marginLeft: 5,
    fontSize: 13,
  },
  discountPrice: {
    color: "#000000",
    fontSize: 16,
    marginVertical: 5,
  },
  actualPrice: {
    fontSize: 12,
    marginLeft: 7,
    textDecorationLine: "line-through",
  },
  productName: {
    color: "#000000",
    fontSize: 14,
  },
  allDeals: {
    color: "#017185",
    marginVertical: 10,
    fontSize: 14,
  },
});
