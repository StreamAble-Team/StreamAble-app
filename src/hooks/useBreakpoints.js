import { useWindowDimensions } from "react-native";

export const useBreakpoints = () => {
  const { width } = useWindowDimensions();

  const isMobile = width <= 700;

  return { isMobile };
};
