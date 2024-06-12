import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { urlFor } from '../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItemsWithId, } from '../features/cartSlice';

const DishRow = ({id, name, description, price, image}) => {

    const[isPressed, setIsPressed] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector((state) => selectCartItemsWithId(state, id));
    
    const addItemCart = () => {
        dispatch(addToCart({id, name, description, price, image}));
    };

    const removeItemFromCart = () => {
        if (!items.length > 0) return;

        dispatch(removeFromCart({id}));
    };

  return (
    <>
    <TouchableOpacity 
        onPress={() => setIsPressed(!isPressed)} 
        className={`flex-row items-center bg-white border p-3 border-gray-200 rounded-2xl mx-1 mb-3 shadow-2xl
        ${isPressed && 'border-b-0'}`}
    >
        <View className='flex-row'>
            <View className='flex-1 pr-2'>
                <Text className='text-lg mb-1'>{name}</Text>
                <Text className='text-gray-400'>{description}</Text>
                <Text className='text-green-500'>${price}</Text>           
            </View>
            <View>
                <Image
                    stlye={{
                        borderWidth: 1,
                        borderColor: '#F3F3F4',
                    }}
                    source={{uri: urlFor(image).url()}}
                    className='h-20 w-20 bg-gray-300 p-4 rounded-xl'
                />
            </View>
        </View>
    </TouchableOpacity>
    {isPressed && (
        <View className='bg-whte px-4'>
            <View className='flex-row items-center space-x-2 pb-3'>
                <TouchableOpacity 
                disabled={!items.length}
                onPress={removeItemFromCart}>
                    <MinusCircleIcon 
                        color={items.length > 0 ? '#00CCBB' : 'gray'} 
                        size={40}
                    />
                </TouchableOpacity>
                <Text>{items?.length}</Text>
                <TouchableOpacity onPress={addItemCart}>
                    <PlusCircleIcon
                        color='#00CCBB' 
                        size={40}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )}
    </>
  )
}

export default DishRow