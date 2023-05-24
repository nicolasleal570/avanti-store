export interface Product {
  id: string;
  title: string;
  description: string;
  handle: string;
  priceRange: PriceRange;
  featuredImage: ProductsFeaturedImage;
  variants: ProductsVariants;
}

export interface PriceRange {
  minVariantPrice: ProductsVariantPrice;
}

export interface ProductsFeaturedImage {
  id: string;
  url: string;
}

export interface ProductsVariants {
  edges: ProductsVariantsEdge[];
}

export interface ProductsVariantsEdge {
  node: ProductsVariantsNode;
}

export interface ProductsVariantsNode {
  title: string;
  price: ProductsVariantPrice;
}

export interface ProductsVariantPrice {
  amount: string;
  currencyCode: string;
}
