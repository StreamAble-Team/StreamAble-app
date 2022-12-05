import * as Linking from "expo-linking";

const prefix = Linking.createURL("/app");

const config = {
  screens: {
    Home: {
      path: "home/:id",
      parse: {
        id: (id) => id,
      },
    },
  },
};

const linking = {
  prefixes: [prefix],
  config,
};

export default linking;
