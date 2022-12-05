import gql from "graphql-tag";
import { AnimeRelationFragment } from "../fragments/Anime";

export const AiringNotificationFragment = gql`
  fragment AiringNotificationFragment on AiringNotification {
    id
    type
    animeId
    episode
    contexts
    createdAt
    media {
      ...AnimeRelationFragment
    }
  }
  ${AnimeRelationFragment}
`;

export const GetAnimeNotifications = gql`
  query GetAnimeNotifications {
    Page(page: 1, perPage: 100) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      notifications(type: AIRING) {
        __typename
        ...AiringNotificationFragment
      }
    }
  }
  ${AnimeRelationFragment}
`;
