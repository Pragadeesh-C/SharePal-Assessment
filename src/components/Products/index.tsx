import React, {memo, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Pressable,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

interface ProductsProps {
  title?: string;
  data?: any;
}

const Card = memo(({item}: any) => {
  const [liked, setLiked] = useState();

  const ShareAction = async () => {
    try {
      await Share.share({
        message: 'SharePal',
      });
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.box}>
      <TouchableOpacity
        style={styles.favIcon}
        onPress={() => setLiked((isLiked): boolean => !isLiked)}>
        <AntDesign
          name={liked ? 'heart' : 'hearto'}
          size={20}
          color={liked ? 'red' : 'black'}
        />
      </TouchableOpacity>
      <Pressable style={styles.shareIcon} onPress={ShareAction}>
        <Entypo name="share" size={20} style={{top: 25}} color={'black'} />
      </Pressable>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.desc}>{item.desc}</Text>
    </View>
  );
});

const Products = memo(({data, title}: ProductsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <Card item={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
});

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom:20
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 210,
    width: 200,
    borderWidth: 0.3,
    borderRadius: 8,
    marginLeft: 20,
    marginTop: 20,
  },
  image: {
    height: 120,
    width: 120,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  favIcon: {
    position: 'absolute',
    right: 5,
    top: 30,
  },
  shareIcon: {
    position: 'absolute',
    right: 5,
    top: 40,
  },
  name: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 15,
  },
  desc: {
    textAlign: 'center',
    color: 'black',
    fontSize: 12,
    marginHorizontal: 5,
  },
});
