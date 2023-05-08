import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGES} from 'images';

const ProductsOnRent = (props: any) => {
  console.log(props.data,"porps")
  const data = props.data;
  const Box = ({item}: any) => {
    return (
      <View style={styles.container}>
        <View style={styles.bg} />
        <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 20}}>
          <Text style={styles.title}>{item.name}</Text>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.box}>
          <Text style={{color: 'black'}}>{item.no}+ Products</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {data.map((item: any) => (
        <Box item={item} />
      ))}
    </View>
  );
};

export default ProductsOnRent;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignSelf: 'center',
    height: 220,
    width: '75%',
    borderWidth: 0.1,
    borderRadius: 2,
    bottom:20
  },
  image: {
    position: 'absolute',
    right: 0,
    top:10,
    marginTop: 20,
    height: 160,
    width: 160,
    resizeMode: 'contain',
  },
  box: {
    position: 'absolute',
    bottom: 40,
    height: 25,
    width: 100,
    borderWidth: 0.4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  title: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  bg: {
    height: '100%',
    width: "30%",
    position: 'absolute',
    backgroundColor: '#D7DF23',
    right: 0,
  },
});
