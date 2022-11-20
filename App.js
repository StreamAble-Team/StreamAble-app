import { StatusBar } from "expo-status-bar";
import AppStack from "./src/navigation/AppStack";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./src/assets/theme/default";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";
import { NavBar } from "./src/components";

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={DefaultTheme}>
      <AppStack />
      <NavBar />
    </ThemeProvider>
  );
}
