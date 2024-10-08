import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '../sanity';
import { ArrowLeftIcon, StarIcon, ChevronRightIcon, MapPinIcon, HeartIcon as HeartIconSolid, } from 'react-native-heroicons/solid';
import { HeartIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import CartIcon from '../components/CartIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';


const RestaurantScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();


    const {params:{
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat,
        }
    } = useRoute();

    useEffect(() => {
        dispatch(setRestaurant({
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat,
        }))
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

  return (
    <>
    <CartIcon/>
    
    <ScrollView> 
        <View className='relative '>
            <Image 
                source={{
                    uri: urlFor(imgUrl).url(),
                }}
                className='w-full h-72 bg-gray-300 p-2'
            />
            <TouchableOpacity onPress={navigation.goBack} className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'>
                <ArrowLeftIcon size={20} color='#00CCBB' />
            </TouchableOpacity>
            <TouchableOpacity onPress={{}} className='absolute top-14 right-5 p-2 bg-gray-100 rounded-full'>
                <HeartIcon size={20} color='#00CCBB' />
            </TouchableOpacity>
        </View>

        <View className='bg-white -mt-12'  style={{borderTopLeftRadius: 40, borderTopRightRadius:40}} >
            <View className='px-5 pt-4'>
                <Text className='text-3xl font-bold'>{title}</Text>
                <View className='flex-row space-x-2 my-1'>
                    <View className='flex-row items-center space-x-1'>
                        <StarIcon color='green' opacity={0.5} size={22} />
                        <Text className='text-xs text-gray-500'>
                            <Text className='text-green-500'>{rating}</Text> . {genre}
                        </Text>          
                    </View>

                    <View className='flex-row items-center space-x-1'>
                        <MapPinIcon color='green' opacity={0.4} size={22}/>
                        <Text className='text-xs text-gray-500'>Nearby . {address}</Text>
                    </View>
                </View>

                <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
            </View>

            <TouchableOpacity className='flex-row items-center pace-x-2 p-4 border-y border-gray-300'>
                <QuestionMarkCircleIcon color='green' opacity={0.6} size={20}/>
                <Text className='pl-2 flex-1 text-md text-green-500 font-bold'>
                    Have a food allergy?
                </Text>
                <ChevronRightIcon color='#00CCBB'/>
            </TouchableOpacity>
        </View>

        <View >
            <Text className='px-4 pt-6 mb-3 font-bold text-xl'>
                Menu
            </Text>

            {/* Dish Rows*/}
            {dishes.map(dish => (
                <DishRow 
                    key={dish._id}
                    id={dish._id}
                    name={dish.name}
                    description={dish.short_description}
                    price={dish.price}
                    image={dish.image}
                />
            ))}

        </View>
        <View className='bg-white px-4 py-4 rounded-t-3xl'>
            <Text className='p-2 font-bold text-lg'>Legal</Text>
            <Text className='p-2'>Prices on this menu are set directly by the Restaurant.</Text>
            <Text className='px-2 py-1'>Item prices may differ on Delivery and Pickup.</Text>
        </View>
    </ScrollView>
    </>

  )
}

export default RestaurantScreen