import React, { useEffect, useState } from 'react';
import { ScrollView, Alert, ActivityIndicator, Text } from 'react-native';
import HeaderTabs from '../components/HeaderTabs';
import Screen from '../components/Screen'
import Categories from '../components/Categories'
import SearchBar from '../components/SearchBar'
import RestaurantItem from '../components/RestaurantItem'
import tailwind from 'tailwind-react-native-classnames';
import { localRestaurants } from '../data/localRestaurants';
import colors from '../configs/colors'
import LocationMap from '../components/LocationMap';
import MapScreen from './MapScreen';

export default function HomeScreen() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
    const [city, setCity] = useState("San Francisco")
    const [coordinates, setCoordinates]  = useState({latitude: 37.7749, longitude: -122.4194}) // San Francisco coordinates
    const [activeTab, setActiveTab] = useState("Delivery");
    const [loading, setLoading] = useState(false)

    async function  getNearbyRestaurants() {
        try{
            setLoading(true)
            // API call to fetch restaurants based on city here.
            const response = await fetch(`https://us1.locationiq.com/v1/search.php?key=pk.5d668167d47f9566616d6666616161`)
            await new Promise((resolve) => setTimeout(()=> resolve(), 2000))
            
            let filteredData = restaurantData.filter(item => item.isOpen && item.hasDelivery && (item.location.city === city || "All"))
            setRestaurantData(city === "San Francisco" ? localRestaurants : [])
            setLoading(false)

            setRestaurantData([...restaurantData, ...localRestaurants])
        } catch (error){
            Alert.alert("Error", "Unable to fetch restaurants at this time.", [{text: "Okay"}]);
        } finally {
            setLoading(false);
        }  
    }
   
    return (
        <Screen style={tailwind`bg-white flex-1`}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "Delivery" ? 
           ( <>
           <SearchBar setCity={setCity} city={city} setCoordinates={setCoordinates} />
            <ScrollView style={tailwind`flex-1`}  showsVerticalScrollIndicator={false}>
                <Categories />
                {loading && <ActivityIndicator size="large" color={colors.primary} style={tailwind`mt-2 mb-6`} />}
                <Text style={tailwind`font-bold text-xl ml-4 mt-2 mb-5`}>Top Picks</Text>
                <RestaurantItem restaurantData={restaurantData}  />

                <Text style={tailwind`font-bold text-xl ml-4 mt-2 mb-5`}>Nearest</Text>
                <RestaurantItem restaurantData={restaurantData} />

                <Text style={tailwind`font-bold text-xl ml-4 mt-2 mb-5`}>Surprise Me</Text>
                <RestaurantItem restaurantData={restaurantData} />

            </ScrollView>
            </>
           )
            :
            <MapScreen coordinates={coordinates} restaurantData={restaurantData}/>

        }
        </Screen>

    );
}

