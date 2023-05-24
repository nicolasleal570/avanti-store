import { gql } from "graphql-request";

export const getProductsQuery = (limit: number) => gql`
  {
    products(first: ${limit}) {
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
`;

export const getProductByHandleQuery = (handle: string) => gql`
  {
    product(handle: "${handle}") {
      id
      title
      description
      featuredImage {
        id
        url
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
            image {
              url
            }
          }
        }
      }
    }
  }
`;
