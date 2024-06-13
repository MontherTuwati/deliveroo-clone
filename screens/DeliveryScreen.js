import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { PhoneIcon, XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from "react-native-progress";
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

  return (
    <View className='flex-1'>
      <MapView 
        initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
        className='flex-1'
        mapType='mutedStandard'
      >
        <Marker
            coordinate={{
                latitude: restaurant.lat,
                longitude: restaurant.long,
            }}
            title={restaurant.title}
            description={restaurant.short_description}
            identifier='origin'
            pinColor='#00CCBB'
        />
      </MapView>

      <SafeAreaView className='bg-white relative rounded-t-3xl border border-gray-300 -mt-12'>
        <View className='justify-between px-5 py-3 '>
            <View className='flex-row justify-between'>
                <View>
                    <Text className='text-lg text-gray-400 font-semibold'>Estimated Arrival</Text>
                    <Text className='text-4xl font-extrabold text-gray-700'>30-45 Minutes</Text>
                </View>
                <Image
                    source={require('../assets/giphy.webp')}
                    className='h-24 w-24'
                />
            </View>
            
            <Progress.Bar color='#00CCBB' size={30} indeterminate={true} />

            <Text className='mt-3 -mb-2 text-gray-500'>
                Your order at {restaurant.title} is being prepared!
            </Text>
        </View>

        <View className='bg-[#00CCBB] flex-row justify-between items-center rounded-full p-2 my-2 mx-2 shadow-3xl'>
          <View className='p-1 rounded-full bg-gray-300'>
            <Image
              source={{
                  uri: 'https://links.papareact.com/wru'
              }}
              className='h-16 w-16 rounded-full'
          />
          </View>
          
          <View className='flex-1 ml-3'>
              <Text className='text-lg font-bold text-white'>Monther Tuwati</Text>
              <Text className='font-bold text-white'>Your Rider</Text>
          </View>
          <View className='flex-row items-center space-x-3 mr-3'>
            <TouchableOpacity className='bg-white p-2 rounded-full'>
              <PhoneIcon color='#00CCBB'/>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => navigation.navigate("Home")}
              className='bg-white p-2 rounded-full'
            >
              <XMarkIcon color='#00CCBB'/>
            </TouchableOpacity>
          </View>
          

        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen