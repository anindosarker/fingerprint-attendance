import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView className="flex-1 items-center justify-center p-4 rounded-2xl bg-green-100">
        <Text>Open up App.js to start working on your app!</Text>
        <View className="bg-amber-100 rounded-2xl border text-white">
          <Button
            title="Slim shady"
            onPress={() => {
              console.log("I'm slim shady");
            }}
          />
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
