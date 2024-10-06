import { Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { CarouselData } from "../data/CarouselData";

const Carousel = () => {
  return (
    <View style={styles.carouselContainer}>
      <Swiper showsPagination={false} style={styles.wrapper} autoplay={true}>
        {CarouselData.map((item) => (
          <View key={item.id}>
            <Image source={item.image} style={styles.imgStyle} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    position: "relative",
  },
  wrapper: {
    height: 300,
  },
  imgStyle: {
    width: "100%",
    height: 250,
  },
});
