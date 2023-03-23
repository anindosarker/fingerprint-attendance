import { View, Text } from "react-native";
import React, { useState } from "react";
import NetInfo from "@react-native-community/netinfo";

export default function Net() {
  const [ssid, setSsid] = useState("");

  NetInfo.fetch().then((state) => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
    console.log("ssid", state.details?.ssid);
    setSsid(state.details?.bssid);
    console.log("bssid", ssid);

  });
  return (
    <View>
      <Text>wifi ssid = {ssid}</Text>
      <Text>{ssid}</Text>
    </View>
  );
}
