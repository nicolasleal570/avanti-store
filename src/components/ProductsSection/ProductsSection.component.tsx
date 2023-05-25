import { Product } from "@/types/products.type";
import { ProductCard } from "../ProductCard/ProductCard.component";

interface ProductsSectionProps {
  title: string;
  description?: string;
  products: Product[];
  sectionId: string;
}

export function ProductsSection({
  title,
  description,
  products,
  sectionId,
}: ProductsSectionProps) {
  return (
    <div className="container my-20 px-4 md:px-0">
      <h2
        className={`flex-1 text-gray-800 font-bold text-3xl text-center md:text-left ${
          !description ? "mb-10" : ""
        }`}
      >
        {title}
      </h2>

      {description && <p className="text-gray-400 mt-2 mb-10">{description}</p>}

      <div id={sectionId} className={`grid grid-cols-1 md:grid-cols-3 gap-10`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
