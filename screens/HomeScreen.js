import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserCircleIcon, MapPinIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    useEffect(() => {
      sanityClient.fetch(`
      *[_type == "featured"]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }`).then(data => {
        setFeaturedCategories(data);
      });
    }, []);

  return (
    <SafeAreaView className="bg-white pt-5 pb-5 flex-1">
      <View>

        {/*Header*/}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image
                source={{
                    uri: 'https://links.papareact.com/wru',
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            
            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                <Text className="font-bold text-xl">Current Location
                  <ChevronDownIcon size={20} color="#00CCBB"/>
                </Text>
            </View>
            <TouchableOpacity>
              <UserCircleIcon size={40} color="#00CCBB"/>
            </TouchableOpacity>
        </View>
        
        {/*Search Bar*/}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row rounded-full border items-center space-x-2 flex-1 border-gray-400 p-3">
            <MagnifyingGlassIcon color='gray' size={25}/>
            <TextInput
              placeholder="Restaurants and cuisines" 
              keyboardType='default'
              className='ml-2 flex-1'
            />
            <View className='relative flex-row'>
              <View className='flex-row items-center space-x-2 border-0 border-l-2 pl-2 border-gray-300'>
                <MapPinIcon size={20} color='#00CCBB'/>
                <Text className='text-gray-400'>Nearby</Text>
              </View>
            </View>
            
          </View>
          
          <View className='p-2 bg-green-500 rounded-full'>
            <AdjustmentsVerticalIcon color='white'/>
          </View>
          
        </View>

        {/*Body*/}
        <ScrollView 
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}>

          {/*Categories*/}
          <Categories/>

          {/*Featured Rows*/}

          {featuredCategories?.map(category => (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          ))}

  
          
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen