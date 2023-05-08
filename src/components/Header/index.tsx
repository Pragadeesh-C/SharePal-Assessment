import { Image, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { IMAGES } from 'images';
interface HeaderProps {

}

const Header = memo(({ }: HeaderProps) => {
    return (
        <View style={{ flexDirection: 'row', }}>
            <Image style={{ height: 50, width: 50, resizeMode: 'contain', }} source={IMAGES.logo} />
            <Text style={{ fontSize: 25, marginTop: 10, color: 'black', marginLeft: 5 }}>SharePal</Text>
            {/* <FontAwesome style={{ color: '#0426EE', position: 'absolute', right: 10, marginTop: 10 }} name="user" size={30} /> */}
        </View>
    )
}
);

export default Header

