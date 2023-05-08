import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {IMAGES} from 'images';

interface TrustBoxProps {}

const DATA = [
  {
    id: '1',
    img: IMAGES.thumbsup,
    text: 'Excellent Quality Products',
  },
  {
    id: '2',
    img: IMAGES.gift,
    text: 'Delivery Date & Return Date is\n\t\t\t\t\t\t\t\t\t\tFREE!!',
  },
  {
    id: '3',
    img: IMAGES.pay,
    text: 'Pay on Delivery',
  },
];

const Box = ({item}: any) => {
  return (
    <View>
      <View style={styles.thumbs}>
        <Image
          source={item.img}
          style={{height: 60, width: 60, resizeMode: 'contain'}}
        />
        <Text style={styles.text}>{item.text}</Text>
      </View>
      <View style={{marginTop: 20, borderWidth: 0.3}} />
    </View>
  );
};

const TrustBox = memo((_props: TrustBoxProps) => {
  return (
    <View style={styles.box}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Box item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
});

export default TrustBox;

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#D6E5FF',
    height: 330,
    width: '90%',
    borderRadius: 10,
    marginTop: 40,
    alignSelf: 'center',
  },
  thumbs: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 30,
  },
  text: {
    color: 'black',
    paddingLeft: 30,
    fontSize: 16,
    alignSelf: 'center',
  },
});
