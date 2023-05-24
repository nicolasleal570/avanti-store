import { gql } from "graphql-request";

export const getCollectionByHandleQuery = (handle: string) => gql`
  {
    collection(handle: "${handle}") {
      id
      title
      handle
      description
      image {
        url
      }
    }
  }
`;

export const getCollectionsQuery = (limit: number) => gql`
  {
    collections(first: ${limit}) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          handle
          title
          description
          image {
            url
          }
        }
      }
    }
  }
`;
