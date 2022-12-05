import gql from "graphql-tag";

export const CharacterData = gql`
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
