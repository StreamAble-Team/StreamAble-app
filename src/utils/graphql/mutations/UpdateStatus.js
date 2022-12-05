import gql from "graphql-tag";

export const UpdateStatus = gql`
  mutation UpdateStatus($mediaId: Int, $status: MediaListStatus) {
    SaveMediaListEntry(mediaId: $mediaId, status: $status) {
      id
    }
  }
`;
