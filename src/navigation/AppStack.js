import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, SearchScreen, InfoScreen, PlayerScreen } from "../screens";
import { NavBar } from "../components";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#0f0f0f",
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Player" component={PlayerScreen} />
      </Stack.Navigator>
      <NavBar />
    </NavigationContainer>
  );
};

export default AppStack;
