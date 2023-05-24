import { graphqlRequest } from "@/config/graphqlRequest.config";
import {
  getProductByHandleQuery,
  getProductsQuery,
} from "@/queries/products.queries";
import { GetProduct } from "@/types/getProduct.types";
import { GetProducts } from "@/types/getProducts.types";

export async function getProducts(limit = 30): Promise<GetProducts> {
  const res = (await graphqlRequest(getProductsQuery(limit))) as GetProducts;
  return res;
}

export async function getProductByHandle(handle: string): Promise<GetProduct> {
  const res = (await graphqlRequest(
    getProductByHandleQuery(handle)
  )) as GetProduct;
  return res;
}
