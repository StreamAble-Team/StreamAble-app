import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "react-query";
import AppStack from "./src/navigation/AppStack";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./src/assets/theme/default";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";
import { useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function App() {
  const [hiddenStatusBar, setHiddenStatusBar] = useState(false);
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={DefaultTheme}>
      <StatusBar style={"light"} hidden={hiddenStatusBar} />
      <QueryClientProvider client={queryClient}>
        <AppStack
          setHiddenStatusBar={setHiddenStatusBar}
          hiddenStatusBar={hiddenStatusBar}
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
