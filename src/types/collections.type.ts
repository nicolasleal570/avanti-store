import { Image } from "./common.types";
import { ProductsList } from "./getProducts.types";

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: Image;
  products?: ProductsList;
}
