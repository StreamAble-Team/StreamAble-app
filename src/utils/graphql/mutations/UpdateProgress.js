import gql from "graphql-tag";

export const UpdateProgress = gql`
  mutation UpdateProgress($mediaId: Int, $progress: Int) {
    SaveMediaListEntry(mediaId: $mediaId, progress: $progress) {
      id
    }
  }
`;
