import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoryImages from '../data/categoriesImages'
import { useNavigation } from '@react-navigation/core';


const RestaurantItemCard = ({ item, onPress }) => {
    const [loved, setLoved] = useState(false)


    return (
        <TouchableOpacity style={[tailwind`mx-4 mb-4`,{minWidth: 300}]} onPress={onPress}>
               { item.categories && item.categories.length > 0 &&
                <Image
                    source={{
                        uri: categoryImages[item.categories[0]] ? 
                        categoryImages[item.categories[0]] : "https://media.istockphoto.com/id/1498243668/photo/tasty-cheeseburger-with-lettuce-cheddar-cheese-tomato-and-pickles-burger-bun-with-sesame.webp?b=1&s=170667a&w=0&k=20&c=hn0NNDGgZAQZ6qEBwO5mhku7OAIy0TKEg6Zgg8n4LTI="
                    }}
                    style={tailwind`w-full h-48 rounded-lg`}
                /> 
                }
            <TouchableOpacity style={tailwind`absolute top-2 right-2`} onPress={() => setLoved(e => !e)}>
                <Entypo name={"heart"} size={28} color="#fff" />
            </TouchableOpacity>
            <View style={tailwind`flex-row items-center mt-1`}>
                <View style={tailwind`flex-grow`}>
                    <Text style={tailwind`font-bold text-lg`} numberOfLines={1}>{item.name}</Text>
                    <View style={tailwind`flex-row items-center`}>
                        <MaterialCommunityIcons name="clock-time-four" size={13} color="#06C167" />
                        <Text style={tailwind`text-xs text-gray-700`}> 20-30 • min • {item.price}</Text>
                    </View>
                </View>
                <View style={tailwind`w-8 h-8 justify-center items-center bg-gray-100 rounded-full`}>
                    <Text style={tailwind`text-gray-600 text-xs`}>{item.rating}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantItemCard;