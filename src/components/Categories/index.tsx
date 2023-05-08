import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {IMAGES} from 'images';

interface CategoriesProps {
  text?: any;
  imgurl?: any;
  data?: any;
}

const Categories = memo(({text, imgurl, data}: CategoriesProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.box}>
      <Image
        style={{width: 157, height: 110, position: 'absolute', bottom: -1,borderRadius:5}}
        source={IMAGES.bg}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('RentProduct', { 
              data: data,
              title:text,
          })
        }>
        <Image style={styles.image} source={imgurl} />
      </TouchableOpacity>
      <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
        {text}
      </Text>
    </View>
  );
});

export default Categories;

const styles = StyleSheet.create({
  box: {
    height: 200,
    width: '40%',
    borderWidth: 0.2,
    borderRadius: 5,
    marginLeft: 25,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    height: 140,
    width: 140,
    resizeMode: 'contain',
  },
});
