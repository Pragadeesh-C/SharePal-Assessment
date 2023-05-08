import React, {memo} from 'react';
import Swiper from 'react-native-swiper';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IMAGES} from 'images';
import {SliderBox} from 'react-native-image-slider-box';

interface CarouselProps {}


const DATA = [
  IMAGES.carourselImage01,
  IMAGES.carourselImage02,
  IMAGES.carourselImage03,
];

const Carousel = memo((_props: CarouselProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={IMAGES.bg} style={styles.bg} />
      <SliderBox
        images={DATA}
        circleLoop={true}
        autoplay={true}
        dotColor="blue"
        style={styles.carousel}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 500,
  },
  bg: {
    flex: 1,
    height: 150,
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 100,
  },
  carousel: {
    height: 340,
    width: 300,
    resizeMode: 'contain',
    marginTop: 35,
    alignSelf: 'center',
  },
});
export default Carousel;
