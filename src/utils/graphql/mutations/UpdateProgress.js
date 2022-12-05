import gql from "graphql-tag";

export const UpdateProgress = gql`
  mutation UpdateProgress($id: Int, $progress: Int) {
    SaveMediaListEntry(id: $id, progress: $progress) {
      id
    }
  }
`;
