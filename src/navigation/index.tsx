import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'container/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RentProduct from 'container/RentProduct';

import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/Feather';
import Item from 'react-native-vector-icons/Foundation';

const StackNavigator = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const TabBarOptions = {
    tabBarActiveTintColor: '#F2FF2B',
    tabBarStyle: {
      borderTopWidth: 0,
      elevation: 0,
      shadowOpacity: 0,
      backgroundColor: '#222531',
    },
  };

  const Tabs = () => {
    return (
      <Tab.Navigator initialRouteName="Home" screenOptions={TabBarOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Item name="home" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icons name="appstore1" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="search" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Offers"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <SimpleLineIcons name="credit-card" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="RentProduct"
          component={RentProduct}
          options={{
            tabBarIcon: ({color, size}) => null, 
            tabBarLabel: () => null, 
            headerShown: false, 
            tabBarButton: props => (
              <TouchableOpacity
                {...props}
                style={{
                  display: 'none',
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="RentProduct"
        component={RentProduct}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
