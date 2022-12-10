import { ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { HttpLink } from "@apollo/client/link/http";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Sentry from "sentry-expo";

import { ANILIST_ACCESS_TOKEN_STORAGE } from "../constants";

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem(ANILIST_ACCESS_TOKEN_STORAGE);

  const Authorization = token ? `Bearer ${token}` : undefined;

  // return the headers to the context so httpLink can read them
  return Authorization
    ? {
        headers: {
          ...headers,
          Authorization,
        },
      }
    : {};
});

const httpLink = new HttpLink({
  uri: "https://graphql.anilist.co",
});

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(async (e) => {
          Sentry.Browser.captureMessage(e.message);

          console.log(e.message);
          if (e.message.toLowerCase().includes("invalid token")) {
            await AsyncStorage.removeItem(ANILIST_ACCESS_TOKEN_STORAGE);
          }
        });
      if (networkError) {
        Sentry.Browser.captureException(networkError);
        console.error(`[Network error]: ${networkError}`);
      }
    }),
    authLink.concat(httpLink),
  ]),
  cache: new InMemoryCache(),
});
