import { graphqlRequest } from "@/config/graphqlRequest.config";
import {
  getCollectionByHandleQuery,
  getCollectionsQuery,
} from "@/queries/collections.query";
import { Collection } from "@/types/collections.type";
import { GetCollections } from "@/types/getCollections.types";

/**
 * 
 * getCollectionByHandle
 * @description This function is used to get a collection using the handle property
 * @param handle This is a special ID that Shopify uses to identify the collection
 * @param after This field refers to the cursor that Shopify uses to paginate forward.
 * @param before This field refers to the cursor that Shopify uses to page back.
 * @returns 
 */
export async function getCollectionByHandle(
  handle: string,
  after?: string,
  before?: string
): Promise<Collection> {
  const res = (await graphqlRequest(
    getCollectionByHandleQuery(handle, after, before)
  )) as {
    collection: Collection;
  };
  return res.collection;
}

/**
 * getCollections
 * @description This function is used to get all the collections of the store
 * @param limit This is a number that serves to limit the number of results
 * @returns Promise<GetCollections>
 */
export async function getCollections(limit = 4): Promise<GetCollections> {
  const res = (await graphqlRequest(
    getCollectionsQuery(limit)
  )) as GetCollections;
  return res;
}
