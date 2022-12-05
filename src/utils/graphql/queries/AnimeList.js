import gql from "graphql-tag";

import { AnimeFragment } from "../fragments/Anime";

export const GetAnimeList = gql`
  query GetAnimeList(
    $userId: Int
    $status: MediaListStatus
    $sort: [MediaListSort]
  ) {
    MediaListCollection(
      userId: $userId
      type: ANIME
      status: $status
      sort: $sort
    ) {
      lists {
        entries {
          id
          mediaId
          score
          progress
          media {
            ...AnimeFragment
          }
        }
      }
      hasNextChunk
    }
  }
  ${AnimeFragment}
`;
