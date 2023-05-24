import { graphqlRequest } from "@/config/graphqlRequest.config";
import {
  getCollectionByHandleQuery,
  getCollectionsQuery,
} from "@/queries/collections.query";
import { Collection } from "@/types/collections.type";
import { GetCollections } from "@/types/getCollections.types";

export async function getCollectionByHandle(
  handle: string
): Promise<Collection> {
  const res = (await graphqlRequest(getCollectionByHandleQuery(handle))) as {
    collection: Collection;
  };
  return res.collection;
}

export async function getCollections(limit = 4): Promise<GetCollections> {
  const res = (await graphqlRequest(
    getCollectionsQuery(limit)
  )) as GetCollections;
  return res;
}
