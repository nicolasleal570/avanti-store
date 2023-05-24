import { Image } from "./common.types";

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: Image;
}
