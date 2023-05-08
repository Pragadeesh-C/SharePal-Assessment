import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from 'components/Header';
import TrustBox from 'components/Categories/Box';
import ProductsOnRent from 'components/ProductsOnRent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const RentProduct = ({route}: any) => {
  return (
    <View>
      <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
        <Header />
        <TrustBox />
        <Text style={styles.text}>{route.params.title} on Rent</Text>
        <ProductsOnRent data={route.params.data} />
      </ScrollView>
      <View
        style={{
          borderRadius: 40,
          backgroundColor: '#3776F5',
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 80,
          right: 10,
        }}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>0</Text>
        <Entypo
          style={{bottom: 4}}
          name="shopping-cart"
          size={20}
          color={'white'}
        />
      </View>
      <View
        style={{
          borderRadius: 40,
          backgroundColor: 'green',
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 20,
          right: 10,
        }}>
        <FontAwesome name="whatsapp" size={20} color={'white'} />
      </View>
    </View>
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
