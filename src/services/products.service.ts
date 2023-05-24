import { graphqlRequest } from "@/config/graphqlRequest.config";
import { getProductsQuery } from "@/queries/products.queries";
import { GetProducts } from "@/types/getProducts.types";

export async function getProducts(limit = 30): Promise<GetProducts> {
  const res = (await graphqlRequest(getProductsQuery(limit))) as GetProducts;
  return res;
}
