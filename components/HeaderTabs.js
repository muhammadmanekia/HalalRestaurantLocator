import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderTabs = ({ activeTab, setActiveTab }) => {

    return (
        <View style={tailwind`flex-row justify-center mt-3`}>
            <HeaderButton text="List View" active={activeTab === "Delivery"} onPress={() => setActiveTab('Delivery')} />
            <HeaderButton text="Map View" active={activeTab === "Pickup"} onPress={() => setActiveTab('Pickup')} />
        </View>
    );
}

const HeaderButton = ({ text, onPress, active }) => (
    <TouchableOpacity style={tailwind`bg-white px-7 py-2 rounded-full ${active && 'bg-black'}`} onPress={onPress}>
        {/* <Text style={tailwind`text-black font-bold ${active && 'text-white'}`}>{text}</Text> */}
        {text === "List View" ? <Entypo  name='list' size={16} color={active ? "white" : "black"} /> : 
        <MaterialCommunityIcons name="map-marker" size={16} color={active ? "white" : "black"} />}
    </TouchableOpacity>
)

export default HeaderTabs;
