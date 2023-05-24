import { Product } from "./products.type"

export interface GetProducts {
  products: ProductsList
}

export interface ProductsList {
  edges: ProductsEdge[]
}

export interface ProductsEdge {
  node: Product
}

