import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from 'components/Header';
import TrustBox from 'components/Categories/Box';
import ProductsOnRent from 'components/ProductsOnRent';

const RentProduct = ({route}: any) => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <TrustBox />
      <Text style={styles.text}>{route.params.title} on Rent</Text>
      <ProductsOnRent data={route.params.data} />
    </ScrollView>
  );
};

export default RentProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 20,
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
