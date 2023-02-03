import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon } from "react-native-heroicons/solid";

const ItemCardContainer = ({ imageSrc, title, location }) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px] my-2">
      <Image
        source={{ uri: imageSrc }}
        className="w-full h-40 rounded-md object-cover"
      />

      <Text className="text-[#428288] text-[18px] font-bold">
        {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
      </Text>

      <View className="flex-row items-center space-x-1">
        <MapPinIcon color="#8597a2" size={20} />
        <Text className="text-[#428288] text-[14px] font-bold">
          {location?.length > 18 ? `${location.slice(0, 14)}..` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
