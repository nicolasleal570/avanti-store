import { Product } from "@/types/products.type";
import { ProductCard } from "../ProductCard/ProductCard.component";

interface ProductsSectionProps {
  title: string;
  products: Product[];
}

export function ProductsSection({ title, products }: ProductsSectionProps) {
  return (
    <div className="container my-20 px-4 md:px-0">
      <h2 className="flex-1 text-gray-800 font-bold text-3xl text-center md:text-left mb-10">
        {title}
      </h2>

      <div className={`grid grid-cols-1 md:grid-cols-3 gap-10`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
