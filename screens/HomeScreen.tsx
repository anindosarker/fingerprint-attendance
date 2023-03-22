import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import * as Network from "expo-network";

export default function HomeScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function handleAuth() {
    const result = await LocalAuthentication.authenticateAsync();
    console.log("auth result", result);
    setIsLoggedIn(result.success);
  }

  const [ip, setIp] = useState(null);

  async function getNetInfo() {
    const networkInfo = await Network.getIpAddressAsync();
    setIp(networkInfo);
  }

  useEffect(() => {
    getNetInfo();
  }, [ip]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {isLoggedIn ? (
        <View>
          <Text className="bg-blue-200 p-2 rounded"> Logged In</Text>
          <Button
            title="Log out"
            color={"red"}
            onPress={() => {
              setIsLoggedIn(false);
            }}
          />
        </View>
      ) : (
        <View>
          <Text className="bg-red-200 p-2 rounded">Not logged in</Text>
          <Button
            title="Log In"
            color={"blue"}
            onPress={() => {
              handleAuth();
            }}
          />
        </View>
      )}
      <Text>Home Screen ip: {ip}</Text>
    </View>
  );
}
