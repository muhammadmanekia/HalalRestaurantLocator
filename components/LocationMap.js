import React, { useRef } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import tailwind from 'tailwind-react-native-classnames';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const LocationMap = ({ coordinates, restaurants }) => {
    const mapRef = useRef(null)

    return (
        <View style={[tailwind`bg-blue-300 relative `, {height:400}]}>
            <MapView
                ref={mapRef}
                style={tailwind`h-full z-10`}
                region={{
                    ...coordinates,
                    latitudeDelta: 1,
                    longitudeDelta: 1,
                  }}
            >
                {coordinates && (
                    <Marker
                        coordinate={{
                            ...coordinates
                        }}
                        identifier="shop"
                        anchor={{ x: 0.5, y: 0.5 }}
                        // title={title}
                    >
                        <MaterialCommunityIcons name="map-marker-check" color="red" size={48} />
                    </Marker>
                )}
                {restaurants.map((restaurant, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: restaurant.coordinates.latitude,
                            longitude: restaurant.coordinates.longitude,
                        }}
                        title={restaurant.title}
                    >
                        <MaterialCommunityIcons name="map-marker-check" color="red" size={48} />
                    </Marker>
                ))}
            </MapView >
        </View >
    );
}

const styles = StyleSheet.create({})

export default LocationMap;
