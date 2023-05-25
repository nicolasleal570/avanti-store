import { PageInfo } from "./common.types";
import { Product } from "./products.type";

export interface GetProducts {
  products: ProductsList;
}

export interface ProductsList {
  pageInfo: PageInfo;
  edges: ProductsEdge[];
}

export interface ProductsEdge {
  node: Product;
}
