import { gql } from "graphql-request";

export const getCollectionByHandleQuery = (
  handle: string,
  after?: string,
  before?: string
) => gql`
  {
    collection(handle: "${handle}") {
      id
      title
      handle
      description
      image {
        url
      }
      products(${before ? `last: 5, before:"${before}"` : "first: 5"} ${
  after ? `, after:"${after}"` : ""
}) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            featuredImage {
              id
              url
            }
          }
        }
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
