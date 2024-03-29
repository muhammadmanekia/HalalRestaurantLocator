import React, { useRef } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import tailwind from 'tailwind-react-native-classnames';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RestaurantMap = ({ coordinates, title }) => {
    const mapRef = useRef(null)

    return (
        <View style={[tailwind`bg-blue-300 relative `, { height: 250 }]}>
            <MapView
                initialRegion={{
                    ...coordinates,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                ref={mapRef}
                style={tailwind`h-full z-10`}
            >
                {coordinates && (
                    <Marker
                        coordinate={{
                            ...coordinates
                        }}
                        identifier="shop"
                        anchor={{ x: 0.5, y: 0.5 }}
                        title={title}
                    >
                        <MaterialCommunityIcons name="map-marker-star" color="red" size={40} />
                    </Marker>
                )}
            </MapView >
            
        </View >
    );
}

const styles = StyleSheet.create({})

export default RestaurantMap;
