import { request } from "graphql-request";

export async function graphqlRequest(query: string) {
  return request("https://mock.shop/api", query);
}
