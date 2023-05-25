import { graphqlRequest } from "@/config/graphqlRequest.config";
import {
  getProductByHandleQuery,
  getProductsQuery,
  getRecommendedProductsQuery,
} from "@/queries/products.queries";
import { Product } from "@/types/products.type";
import { GetProduct } from "@/types/getProduct.types";
import { GetProducts } from "@/types/getProducts.types";

/**
 *
 * @param limit This field is used to limit the number of results
 * @param after This field refers to the cursor that Shopify uses to paginate forward.
 * @param before This field refers to the cursor that Shopify uses to page back.
 * @param query This field is used to search for products using their title
 * @returns
 */
export async function getProducts(
  limit = 30,
  after?: string,
  before?: string,
  query?: string
): Promise<GetProducts> {
  const res = (await graphqlRequest(
    getProductsQuery(limit, after, before, query)
  )) as GetProducts;
  return res;
}

/**
 * getRecommendedProducts
 * @description This function is used to obtain the recommended products of a particular product
 * @param productId This field refers to the ID of the product from which we are going to start to obtain recommendations
 * @returns
 */
export async function getRecommendedProducts(productId: string) {
  const res = (await graphqlRequest(
    getRecommendedProductsQuery(productId)
  )) as { productRecommendations: Product[] };

  return res;
}

/**
 * getProductByHandle
 * @description This function helps us to obtain all the details of a product using the handle property
 * @param handle This is a special ID that Shopify uses to identify the product
 * @returns
 */
export async function getProductByHandle(handle: string): Promise<GetProduct> {
  const res = (await graphqlRequest(
    getProductByHandleQuery(handle)
  )) as GetProduct;
  return res;
}
