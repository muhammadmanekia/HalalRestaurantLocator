import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { Entypo } from "react-native-vector-icons";
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import RestaurantItemCard from './RestaurantItemCard.js';

const RestaurantItem = ({ restaurantData }) => {
    const navigation = useNavigation()

    const handlePress = (item) => {
        navigation.navigate("DetailsScreen", {
            item: {...item}
        })
        console.log(item)
    }

return (
    <View>
        {restaurantData?.map((item, index) => (
            <>
            <RestaurantItemCard key={index} item={item} 
            onPress={() => handlePress(item)} 
            />
            </>
        ))}
    </View>
);
}



export default RestaurantItem;
