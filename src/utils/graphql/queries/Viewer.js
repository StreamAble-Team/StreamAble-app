import gql from "graphql-tag";

export const GetViewer = gql`
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
