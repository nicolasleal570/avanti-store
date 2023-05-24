export interface Product {
  id: string;
  title: string;
  description?: string;
  handle: string;
  priceRange: PriceRange;
  featuredImage: ProductsFeaturedImage;
  variants?: ProductsVariants;
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
  id?: string;
  title: string;
  price: ProductsVariantPrice;
  selectedOptions?: ProductsVariantSelectedOption[];
  image?: Pick<ProductsFeaturedImage, "url">;
}

export interface ProductsVariantPrice {
  amount: string;
  currencyCode: string;
}

export interface ProductsVariantSelectedOption {
  name: string;
  value: string;
}
