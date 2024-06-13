import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromCart, selectCartItems, selectCartTotal } from '../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';
import { TrashIcon } from 'react-native-heroicons/outline';

const CartScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal)
    const [groupedItemsInCart, setGroupedItemsinCart] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        },{});

    setGroupedItemsinCart(groupedItems);
    }, [items]);

    return (
        <SafeAreaView className='pt-5 flex-1 bg-white'>
            <View className='flex-1 bg-gray-100'>
                <View className='p-5 border-b border-[#00CCBB] bg-white shadow-xs'>
                    <View>
                        <Text className='text-lg font-bold text-center'>Cart</Text>
                        <Text className='text-center text-gray-400'>{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity 
                        onPress={navigation.goBack}
                        className='rounded-full bg-gray-100 absolute top-3 right-5'
                    >
                        <XCircleIcon color='#00CCBB' height={50} width={50}/>
                    </TouchableOpacity>
                </View>

                <View className='flex-row items-center space-x-4 px-4 py-4 bg-[#c5fffa]'>
                    <Image 
                        source={require('../assets/deliveroo-delivery.png')} 
                        className='h-10 w-10 px-8 py-8 rounded-full'
                        />
                        <Text className='flex-1 pl-4'>Deliver in 30-45 minutes</Text>
                        <TouchableOpacity>
                            <Text className='text-[#00CCBB] font-bold'>Change</Text>
                        </TouchableOpacity>
                </View>

                <ScrollView className='divide-y divide-gray-200 my-2'>
                    {Object.entries(groupedItemsInCart).map(([key, items]) => (
                        <View key={key} className='flex-row items-center space-x-3 bg-white py-3 px-5 shadow-2xl'>
                            <Text className='text-[#00CCBB]'>{items.length} x</Text>
                            <Image
                                source={{uri: urlFor(items[0]?.image).url()}}
                                className='h-12 w-12 rounded-full'
                            />
                            <Text className='flex-1'>{items[0]?.name}</Text>
                            <Text className='text-gray-600'>${items[0]?.price}</Text>

                            <TouchableOpacity className='bg-gray-100 items-center p-2 rounded-full'>
                                <TrashIcon onPress={() => dispatch(removeFromCart({id: key}))} color='#00CCBB' />
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                <View className='p-5 bg-[#c5fffa] space-y-4 rounded-t-3xl'>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-700'>Subtotal</Text>
                        <Text className='text-gray-700'>${cartTotal}</Text>
                    </View>

                    <View className='flex-row justify-between'>
                        <Text className='text-gray-700'>Deilvery Free</Text>
                        <Text className='text-gray-700'>${5.99}</Text>
                    </View>

                    <View className='flex-row justify-between'>
                        <Text>Order Total</Text>
                        <Text className='font-extrabold'>${cartTotal + 5.99}</Text>
                    </View>

                    <TouchableOpacity 
                    onPress={() => navigation.navigate('PreparingOrderScreen')}
                    className='bg-[#00CCBB] p-4 rounded-full'>
                        <Text className='text-center text-white text-lg font-bold'>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CartScreen;