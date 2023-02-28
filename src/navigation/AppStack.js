import React, { useEffect, useRef, useState } from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  SearchScreen,
  InfoScreen,
  PlayerScreen,
  SettingsScreen,
  AuthScreen,
  ListScreen,
} from "../screens";
import * as ScreenOrientation from "expo-screen-orientation";
import { NavBar } from "../components";

import * as NavigationBar from "expo-navigation-bar";
import MangaScreen from "../screens/Manga";
import ReaderScreen from "../screens/Reader";
import TESTING from "../screens/TESTING";

const Stack = createNativeStackNavigator();

const AppStack = ({ setHiddenStatusBar }) => {
  const navigationRef = useNavigationContainerRef();
  const [routeNameRef, setRouteNameRef] = useState();

  useEffect(() => {
    if (routeNameRef === "Player" || routeNameRef === "Reader") {
      if (routeNameRef === "Player")
        ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.LANDSCAPE
        );
      return setHiddenStatusBar(true);
    }

    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    setHiddenStatusBar(false);

    NavigationBar.setVisibilityAsync("hidden");
    NavigationBar.setBehaviorAsync("overlay-swipe");
  }, [routeNameRef]);

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
        {/* <Stack.Screen name="Home" component={TESTING} /> */}
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Lists" component={ListScreen} />
        <Stack.Screen name="Manga" component={MangaScreen} />
        <Stack.Screen name="Player" component={PlayerScreen} />
        <Stack.Screen name="Reader" component={ReaderScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
      </Stack.Navigator>
      <NavBar
        currentRoute={routeNameRef === undefined ? "loading" : routeNameRef}
      />
    </NavigationContainer>
  );
};

export default AppStack;
