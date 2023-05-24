import { gql } from "graphql-request";

export const getProductsQuery = (limit: number) => gql`
  {
    products(first: ${limit}) {
      edges {
        node {
          id
          title
          description
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
          variants(first: 20) {
            edges {
              node {
                title
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getProductByHandleQuery = (handle: string) => gql`

`;
