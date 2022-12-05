import { makeRedirectUri, AuthRequest } from "expo-auth-session";
import { useEffect, useState, useCallback } from "react";

import { CLIENT_ID } from "../utils/constants";

const redirectUri = makeRedirectUri({
  scheme: "streamable",
  path: "redirect",
});

export function useAniListAuthRequest() {
  const [request, setRequest] = useState(null);
  const [result, setResult] = useState(null);

  const AniListURL = `https://anilist.co/api/v2/oauth/authorize?client_id=${CLIENT_ID}&response_type=token`;

  const promptAsync = useCallback(
    async (options = {}) => {
      if (!request) {
        throw new Error(
          "Cannot prompt to authenticate until the request has finished loading."
        );
      }
      const result = await request?.promptAsync(
        { authorizationEndpoint: AniListURL },
        options
      );
      setResult(result);
      return result;
    },
    [request?.url, AniListURL]
  );

  useEffect(() => {
    if (AniListURL) {
      const request = new AuthRequest({
        usePKCE: false,
        redirectUri,
        scopes: [],
        clientId: "",
      });
      request.url = AniListURL;
      setRequest(request);
    }
  }, [AniListURL]);

  return [request, result, promptAsync];
}
