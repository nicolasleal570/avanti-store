import { Collection } from "./collections.type";
import { PageInfo } from "./common.types";

export interface GetCollections {
  collections: Collections;
}

export interface Collections {
  pageInfo: PageInfo;
  edges: CollectionEdge[];
}

export interface CollectionEdge {
  cursor: string;
  node: Collection;
}


