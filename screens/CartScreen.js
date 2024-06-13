import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../features/restaurantSlice';
import { selectCartItems } from '../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { XCircleIcon } from 'react-native-heroicons/solid';

const CartScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectCartItems);
    const [groupedItemsInCart, setGroupedItemsinCart] = useState([]);
    const dispatch = useDispatch();

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[items.id] = results[items.id] || []).push(item);
            return results;
        },{});

        setGroupedItemsinCart(groupedItems);
    }, [items])

    return (
        <SafeAreaView className='pt-10 flex-1 bg-white'>
            <View>
                <View>
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
            </View>
        </SafeAreaView>
    );
};

export default CartScreen;