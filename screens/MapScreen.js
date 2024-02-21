import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import colors from '../configs/colors'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'
import tailwind from 'tailwind-react-native-classnames';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import RestaurantMap from '../components/RestaurantMap'
import MenuItems from '../components/MenuItems'
import ViewCart from '../components/ViewCart';
import LocationMap from '../components/LocationMap';
import RestaurantItem from '../components/RestaurantItem';

const MapScreen = ({coordinates, restaurantData}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={tailwind`absolute top-9 left-4 z-30 w-9 h-9 rounded-full bg-white justify-center items-center shadow`} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={18} color={colors.black} />
            </TouchableOpacity>
            <View style={styles.mapImageWrpper}>
                    <LocationMap coordinates={coordinates} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={tailwind`z-20`}>
                <View style={styles.content}>
                    {/* MenuItems */}
                    <RestaurantItem restaurantData={restaurantData} />
                    {/* <MenuItems resName={name} resImage={image_url} /> */}
                </View>
            </ScrollView>
           

            {/* <ViewCart total={totalPrice} count={getAllItems.length} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        position: 'relative',
        flex: 1
    },
    mapImageWrpper: {
        position: 'absolute',
        width: '100%', 
    },
    image: {
        width: '100%',
        resizeMode: 'cover',
        height: 260
    },
    content: {
        position: 'relative',
        zIndex: 20,
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 25,
        marginTop: 300,
        paddingBottom: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    title: {
        fontSize: 23,
        color: colors.title,
        fontWeight: '700',
        maxWidth: '80%'
    },
    price: {
        fontSize: 20,
        color: colors.primary,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
        paddingVertical: 3,
        backgroundColor: colors.light,
        borderRadius: 5,
        marginRight: 7
    },
    infoText: {
        marginLeft: 4,
        fontSize: 12
    },
})


export default MapScreen