import React, { useRef, useState } from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, SearchScreen } from "../screens";
import { NavBar } from "../components";
import InfoScreen from "../screens/Info";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const navigationRef = useNavigationContainerRef();
  const [routeNameRef, setRouteNameRef] = useState();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        setRouteNameRef(navigationRef.getCurrentRoute().name);
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          // console.log(currentRouteName);
          // Save the current route name for later comparison
          setRouteNameRef(currentRouteName);
        }
      }}
    >
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
      </Stack.Navigator>
      <NavBar
        currentRoute={routeNameRef === undefined ? "loading" : routeNameRef}
      />
    </NavigationContainer>
  );
};

export default AppStack;
