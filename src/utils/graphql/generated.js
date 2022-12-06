import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

export const MediaListStatus = {
  /** Finished watching/reading */
  Completed: "COMPLETED",
  /** Currently watching/reading */
  Current: "CURRENT",
  /** Stopped watching/reading before completing */
  Dropped: "DROPPED",
  /** Paused watching/reading */
  Paused: "PAUSED",
  /** Planning to watch/read */
  Planning: "PLANNING",
  /** Re-watching/reading */
  Repeating: "REPEATING",
};

export const MediaListSort = {
  AddedTime: "ADDED_TIME",
  AddedTimeDesc: "ADDED_TIME_DESC",
  FinishedOn: "FINISHED_ON",
  FinishedOnDesc: "FINISHED_ON_DESC",
  MediaId: "MEDIA_ID",
  MediaIdDesc: "MEDIA_ID_DESC",
  MediaPopularity: "MEDIA_POPULARITY",
  MediaPopularityDesc: "MEDIA_POPULARITY_DESC",
  MediaTitleEnglish: "MEDIA_TITLE_ENGLISH",
  MediaTitleEnglishDesc: "MEDIA_TITLE_ENGLISH_DESC",
  MediaTitleNative: "MEDIA_TITLE_NATIVE",
  MediaTitleNativeDesc: "MEDIA_TITLE_NATIVE_DESC",
  MediaTitleRomaji: "MEDIA_TITLE_ROMAJI",
  MediaTitleRomajiDesc: "MEDIA_TITLE_ROMAJI_DESC",
  Priority: "PRIORITY",
  PriorityDesc: "PRIORITY_DESC",
  Progress: "PROGRESS",
  ProgressDesc: "PROGRESS_DESC",
  ProgressVolumes: "PROGRESS_VOLUMES",
  ProgressVolumesDesc: "PROGRESS_VOLUMES_DESC",
  Repeat: "REPEAT",
  RepeatDesc: "REPEAT_DESC",
  Score: "SCORE",
  ScoreDesc: "SCORE_DESC",
  StartedOn: "STARTED_ON",
  StartedOnDesc: "STARTED_ON_DESC",
  Status: "STATUS",
  StatusDesc: "STATUS_DESC",
  UpdatedTime: "UPDATED_TIME",
  UpdatedTimeDesc: "UPDATED_TIME_DESC",
};

/** The current releasing status of the media */
export const MediaStatus = {
  /** Ended before the work could be finished */
  Cancelled: "CANCELLED",
  /** Has completed and is no longer being released */
  Finished: "FINISHED",
  /** Version 2 only. Is currently paused from releasing and will resume at a later date */
  Hiatus: "HIATUS",
  /** To be released at a later date */
  NotYetReleased: "NOT_YET_RELEASED",
  /** Currently releasing */
  Releasing: "RELEASING",
};

export const MediaTrailerDataFragmentDoc = gql`
  fragment MediaTrailerData on MediaTrailer {
    id
    thumbnail
    site
  }
`;
export const StreamingLinkDataFragmentDoc = gql`
  fragment StreamingLinkData on MediaStreamingEpisode {
    title
    thumbnail
    url
    site
  }
`;
export const MediaExternalLinkDataFragmentDoc = gql`
  fragment MediaExternalLinkData on MediaExternalLink {
    id
    url
    site
  }
`;
export const AnimeRelationFragmentFragmentDoc = gql`
  fragment AnimeRelationFragment on Media {
    id
    isFavourite
    title {
      romaji
      native
      english
    }
    type
    format
    coverImage {
      large
      medium
      color
    }
  }
`;
export const CharacterDataFragmentDoc = gql`
  fragment CharacterData on Character {
    id
    isFavourite
    name {
      first
      last
      full
      native
      alternative
    }
    image {
      large
      medium
    }
    description
    siteUrl
  }
`;
export const AnimeFragmentFragmentDoc = gql`
  fragment AnimeFragment on Media {
    id
    title {
      romaji
      native
      english
    }
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    status
    genres
    duration
    episodes
    description
    isFavourite
    studios(isMain: true) {
      nodes {
        id
        name
      }
    }
    averageScore
    coverImage {
      large
      medium
      color
    }
    trailer {
      ...MediaTrailerData
    }
    streamingEpisodes {
      ...StreamingLinkData
    }
    externalLinks {
      ...MediaExternalLinkData
    }
    nextAiringEpisode {
      id
      airingAt
      episode
      timeUntilAiring
    }
    mediaListEntry {
      progress
      status
      score(format: POINT_10)
      id
    }
    relations {
      edges {
        id
        relationType
        node {
          ...AnimeRelationFragment
        }
      }
    }
    characters {
      edges {
        id
        role
        node {
          ...CharacterData
        }
      }
      nodes {
        ...CharacterData
      }
    }
  }
  ${MediaTrailerDataFragmentDoc}
  ${StreamingLinkDataFragmentDoc}
  ${MediaExternalLinkDataFragmentDoc}
  ${AnimeRelationFragmentFragmentDoc}
  ${CharacterDataFragmentDoc}
`;
export const FavouritesDataFragmentDoc = gql`
  fragment FavouritesData on Favourites {
    anime {
      pageInfo {
        total
      }
    }
    characters {
      pageInfo {
        total
      }
    }
  }
`;
export const AiringNotificationFragmentFragmentDoc = gql`
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
  ${AnimeRelationFragmentFragmentDoc}
`;
export const RemoveFromListDocument = gql`
  mutation RemoveFromList($id: Int!) {
    DeleteMediaListEntry(id: $id) {
      deleted
    }
  }
`;

/**
 * __useRemoveFromListMutation__
 *
 * To run a mutation, you first call `useRemoveFromListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFromListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFromListMutation, { data, loading, error }] = useRemoveFromListMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveFromListMutation(baseOptions) {
  return Apollo.useMutation(RemoveFromListDocument, baseOptions);
}
export const ToggleFavoriteDocument = gql`
  mutation ToggleFavorite($animeId: Int, $characterId: Int) {
    ToggleFavourite(animeId: $animeId, characterId: $characterId) {
      ...FavouritesData
    }
  }
  ${FavouritesDataFragmentDoc}
`;

/**
 * __useToggleFavoriteMutation__
 *
 * To run a mutation, you first call `useToggleFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleFavoriteMutation, { data, loading, error }] = useToggleFavoriteMutation({
 *   variables: {
 *      animeId: // value for 'animeId'
 *      characterId: // value for 'characterId'
 *   },
 * });
 */
export function useToggleFavoriteMutation(baseOptions) {
  return Apollo.useMutation(ToggleFavoriteDocument, baseOptions);
}

export const UpdateProgressDocument = gql`
  mutation UpdateProgress($id: Int, $progress: Int) {
    SaveMediaListEntry(id: $id, progress: $progress) {
      id
    }
  }
`;

/**
 * __useUpdateProgressMutation__
 *
 * To run a mutation, you first call `useUpdateProgressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProgressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProgressMutation, { data, loading, error }] = useUpdateProgressMutation({
 *   variables: {
 *      id: // value for 'id'
 *      progress: // value for 'progress'
 *   },
 * });
 */
export function useUpdateProgressMutation(baseOptions) {
  return Apollo.useMutation(UpdateProgressDocument, baseOptions);
}

export const UpdateScoreDocument = gql`
  mutation UpdateScore($id: Int, $scoreRaw: Int) {
    SaveMediaListEntry(id: $id, scoreRaw: $scoreRaw) {
      id
    }
  }
`;

/**
 * __useUpdateScoreMutation__
 *
 * To run a mutation, you first call `useUpdateScoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateScoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateScoreMutation, { data, loading, error }] = useUpdateScoreMutation({
 *   variables: {
 *      id: // value for 'id'
 *      scoreRaw: // value for 'scoreRaw'
 *   },
 * });
 */
export function useUpdateScoreMutation(baseOptions) {
  return Apollo.useMutation(UpdateScoreDocument, baseOptions);
}

export const UpdateStatusDocument = gql`
  mutation UpdateStatus($mediaId: Int, $status: MediaListStatus) {
    SaveMediaListEntry(mediaId: $mediaId, status: $status) {
      id
    }
  }
`;

/**
 * __useUpdateStatusMutation__
 *
 * To run a mutation, you first call `useUpdateStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStatusMutation, { data, loading, error }] = useUpdateStatusMutation({
 *   variables: {
 *      mediaId: // value for 'mediaId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateStatusMutation(baseOptions) {
  return Apollo.useMutation(UpdateStatusDocument, baseOptions);
}

export const GetAnimeDocument = gql`
  query GetAnime($id: Int) {
    Media(id: $id) {
      ...AnimeFragment
    }
  }
  ${AnimeFragmentFragmentDoc}
`;

/**
 * __useGetAnimeQuery__
 *
 * To run a query within a React component, call `useGetAnimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAnimeQuery(baseOptions) {
  return Apollo.useQuery(GetAnimeDocument, baseOptions);
}
export function useGetAnimeLazyQuery(baseOptions) {
  return Apollo.useLazyQuery(GetAnimeDocument, baseOptions);
}

export function refetchGetAnimeQuery(variables) {
  return { query: GetAnimeDocument, variables: variables };
}
export const GetAnimeListDocument = gql`
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
  ${AnimeFragmentFragmentDoc}
`;

/**
 * __useGetAnimeListQuery__
 *
 * To run a query within a React component, call `useGetAnimeListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimeListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimeListQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      status: // value for 'status'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetAnimeListQuery(baseOptions) {
  return Apollo.useQuery(GetAnimeListDocument, baseOptions);
}
export function useGetAnimeListLazyQuery(baseOptions) {
  return Apollo.useLazyQuery(GetAnimeListDocument, baseOptions);
}
export function refetchGetAnimeListQuery(variables) {
  return { query: GetAnimeListDocument, variables: variables };
}
export const GetAnimeNotificationsDocument = gql`
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
  ${AiringNotificationFragmentFragmentDoc}
`;

/**
 * __useGetAnimeNotificationsQuery__
 *
 * To run a query within a React component, call `useGetAnimeNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimeNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimeNotificationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAnimeNotificationsQuery(baseOptions) {
  return Apollo.useQuery(GetAnimeNotificationsDocument, baseOptions);
}
export function useGetAnimeNotificationsLazyQuery(baseOptions) {
  return Apollo.useLazyQuery(GetAnimeNotificationsDocument, baseOptions);
}

export function refetchGetAnimeNotificationsQuery(variables) {
  return { query: GetAnimeNotificationsDocument, variables: variables };
}
export const GetTrendingAnimeDocument = gql`
  query GetTrendingAnime($page: Int = 1, $perPage: Int = 20) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
        total
        currentPage
        perPage
        lastPage
      }
      media(format: TV, isAdult: false, type: ANIME, sort: [TRENDING_DESC]) {
        ...AnimeFragment
      }
    }
  }
  ${AnimeFragmentFragmentDoc}
`;

/**
 * __useGetTrendingAnimeQuery__
 *
 * To run a query within a React component, call `useGetTrendingAnimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrendingAnimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrendingAnimeQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useGetTrendingAnimeQuery(baseOptions) {
  return Apollo.useQuery(GetTrendingAnimeDocument, baseOptions);
}
export function useGetTrendingAnimeLazyQuery(baseOptions) {
  return Apollo.useLazyQuery(GetTrendingAnimeDocument, baseOptions);
}

export function refetchGetTrendingAnimeQuery(variables) {
  return { query: GetTrendingAnimeDocument, variables: variables };
}
export const SearchAnimeDocument = gql`
  query SearchAnime($search: String) {
    Page {
      pageInfo {
        hasNextPage
        total
      }
      media(
        search: $search
        format_not_in: [MANGA, MUSIC, NOVEL, ONE_SHOT]
        isAdult: false
        type: ANIME
      ) {
        ...AnimeFragment
      }
    }
  }
  ${AnimeFragmentFragmentDoc}
`;

/**
 * __useSearchAnimeQuery__
 *
 * To run a query within a React component, call `useSearchAnimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchAnimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchAnimeQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useSearchAnimeQuery(baseOptions) {
  return Apollo.useQuery(SearchAnimeDocument, baseOptions);
}
export function useSearchAnimeLazyQuery(baseOptions) {
  return Apollo.useLazyQuery(SearchAnimeDocument, baseOptions);
}
export function refetchSearchAnimeQuery(variables) {
  return { query: SearchAnimeDocument, variables: variables };
}
export const GetCharacterDocument = gql`
  query GetCharacter($id: Int) {
    Character(id: $id) {
      ...CharacterData
    }
  }
  ${CharacterDataFragmentDoc}
`;

/**
 * __useGetCharacterQuery__
 *
 * To run a query within a React component, call `useGetCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCharacterQuery(baseOptions) {
  return Apollo.useQuery(GetCharacterDocument, baseOptions);
}
export function useGetCharacterLazyQuery(baseOptions) {
  return Apollo.useLazyQuery(GetCharacterDocument, baseOptions);
}
export function refetchGetCharacterQuery(variables) {
  return { query: GetCharacterDocument, variables: variables };
}
export const GetViewerDocument = gql`
  query GetViewer {
    Viewer {
      id
      name
      avatar {
        large
        medium
      }
      favourites {
        anime {
          nodes {
            id
            title {
              english
              romaji
              native
            }
            coverImage {
              large
              medium
            }
          }
        }
        characters {
          nodes {
            id
            name {
              full
            }
            image {
              large
              medium
            }
          }
        }
      }
      statistics {
        anime {
          count
          minutesWatched
        }
        manga {
          count
          chaptersRead
        }
      }
    }
  }
`;

/**
 * __useGetViewerQuery__
 *
 * To run a query within a React component, call `useGetViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetViewerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetViewerQuery(baseOptions) {
  return Apollo.useQuery(GetViewerDocument, baseOptions);
}
export function useGetViewerLazyQuery(baseOptions) {
  return Apollo.useLazyQuery(GetViewerDocument, baseOptions);
}

export function refetchGetViewerQuery(variables) {
  return { query: GetViewerDocument, variables: variables };
}

const result = {
  __schema: {
    types: [
      {
        kind: "UNION",
        name: "ActivityUnion",
        possibleTypes: [
          {
            name: "ListActivity",
          },
          {
            name: "MessageActivity",
          },
          {
            name: "TextActivity",
          },
        ],
      },
      {
        kind: "UNION",
        name: "LikeableUnion",
        possibleTypes: [
          {
            name: "ActivityReply",
          },
          {
            name: "ListActivity",
          },
          {
            name: "MessageActivity",
          },
          {
            name: "TextActivity",
          },
          {
            name: "Thread",
          },
          {
            name: "ThreadComment",
          },
        ],
      },
      {
        kind: "UNION",
        name: "NotificationUnion",
        possibleTypes: [
          {
            name: "ActivityLikeNotification",
          },
          {
            name: "ActivityMentionNotification",
          },
          {
            name: "ActivityMessageNotification",
          },
          {
            name: "ActivityReplyLikeNotification",
          },
          {
            name: "ActivityReplyNotification",
          },
          {
            name: "ActivityReplySubscribedNotification",
          },
          {
            name: "AiringNotification",
          },
          {
            name: "FollowingNotification",
          },
          {
            name: "MediaDataChangeNotification",
          },
          {
            name: "MediaDeletionNotification",
          },
          {
            name: "MediaMergeNotification",
          },
          {
            name: "RelatedMediaAdditionNotification",
          },
          {
            name: "ThreadCommentLikeNotification",
          },
          {
            name: "ThreadCommentMentionNotification",
          },
          {
            name: "ThreadCommentReplyNotification",
          },
          {
            name: "ThreadCommentSubscribedNotification",
          },
          {
            name: "ThreadLikeNotification",
          },
        ],
      },
    ],
  },
};
export default result;
