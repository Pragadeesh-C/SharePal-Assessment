import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Carousel from 'components/Carousel';
import Categories from 'components/Categories';
import Products from 'components/Products';
import {
  ActionCameras,
  Cameras,
  GamingConsole,
  PS4Games,
  Riding,
  Trekking,
  WinterWear,
} from 'configs/data';
import {IMAGES} from 'images';
import Entypo from 'react-native-vector-icons/Entypo';

interface HomeProps {
  text?: string;
}

const Home = memo((_props: HomeProps) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} stickyHeaderIndices={[0]} stick>
        <View
          style={{flexDirection: 'row', backgroundColor: 'white', height: 60}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height: 50, width: 50, resizeMode: 'contain'}}
              source={IMAGES.logo}
            />
            <Text
              style={{
                fontSize: 25,
                marginTop: 10,
                color: 'black',
                marginLeft: 5,
              }}>
              SharePal
            </Text>
          </View>
          <FontAwesome
            style={{
              color: '#0426EE',
              position: 'absolute',
              right: 10,
              marginTop: 10,
            }}
            name="user"
            size={30}
          />
        </View>
        <Carousel />
        <Text
          style={{
            color: 'black',
            marginTop: 10,
            fontSize: 23,
            fontWeight: '500',
            textAlign: 'center',
          }}>
          What would you like to rent?
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Categories
            data={Trekking}
            text="Trekking Gear"
            imgurl={IMAGES.trekkinggear}
          />
          <Categories
            data={Riding}
            text="Riding Gear"
            imgurl={IMAGES.ridinggear}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Categories
            data={ActionCameras}
            text="Action Cameras"
            imgurl={IMAGES.actioncamera}
          />
          <Categories data={Cameras} text="Cameras" imgurl={IMAGES.cameras} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Categories
            data={GamingConsole}
            text="Gaming Console"
            imgurl={IMAGES.gamingconsole}
          />
          <Categories
            data={PS4Games}
            text="PS4 Games"
            imgurl={IMAGES.ps4games}
          />
        </View>
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <Categories
            data={WinterWear}
            text="Winter Wear"
            imgurl={IMAGES.winterwear}
          />
        </View>
        <Products title="Trekking Gear" data={Trekking} />
        <Products title="Riding Gear" data={Riding} />
        <Products title="Action Cameras" data={ActionCameras} />
        <Products title="Cameras" data={Cameras} />
        <Products title="PS4 Games" data={PS4Games} />
        <Products title="Winter Wear" data={WinterWear} />
        <Products title="Gaming Console" data={GamingConsole} />
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
        <Text style={{fontWeight: 'bold'}}>0</Text>
        <Entypo style={{bottom:4}} name="shopping-cart" size={20} color={'white'} />
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
});

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
