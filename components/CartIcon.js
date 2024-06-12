import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../features/cartSlice'
import { useNavigation, useRoute } from '@react-navigation/native'

const CartIcon = () => {
    const items = useSelector(selectCartItems);
    const navigation = useNavigation();
    const cartTotal = useSelector(selectCartTotal)

    const {params:{title}} = useRoute();

  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity className='bg-[#00CCBB] mx-5 p-4 py-2 rounded-full flex-row items-center justify-between shadow-lg'> 
        <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2 rounded-full'>{items.length}</Text>    
        <View className='items-center flex-1'>
            <Text className='text-white font-extrabold text-lg'>View Cart</Text>
            <Text className='text-white font-extrabold text-lg'>{title}</Text>
        </View>  
        <Text className='text-lg text-white font-extrabold'>${cartTotal}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartIcon