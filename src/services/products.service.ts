import { graphqlRequest } from "@/config/graphqlRequest.config";
import {
  getProductByHandleQuery,
  getProductsQuery,
  getRecommendedProductsQuery,
} from "@/queries/products.queries";
import { GetProduct } from "@/types/getProduct.types";
import { GetProducts } from "@/types/getProducts.types";
import { Product } from "@/types/products.type";

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

export async function getRecommendedProducts(productId: string) {
  const res = (await graphqlRequest(
    getRecommendedProductsQuery(productId)
  )) as { productRecommendations: Product[] };

  return res;
}

export async function getProductByHandle(handle: string): Promise<GetProduct> {
  const res = (await graphqlRequest(
    getProductByHandleQuery(handle)
  )) as GetProduct;
  return res;
}
