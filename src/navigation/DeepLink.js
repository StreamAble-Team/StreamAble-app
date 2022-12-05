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
  prefixes: ["streamable://app"],
  config,
};

export default linking;
