import { ProductDetail } from "@/components/ProductDetail/ProductDetail";
import { ProductsSection } from "@/components/ProductsSection/ProductsSection.component";
import {
  getProductByHandle,
  getRecommendedProducts,
} from "@/services/products.service";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const slug = params.slug as string;
  const { product } = await getProductByHandle(slug);
  const { productRecommendations } = await getRecommendedProducts(product.id);

  return (
    <>
      <ProductDetail product={product} />
      <ProductsSection
        title="Recommended products"
        description="These recommendations are based on the product selected"
        sectionId="recommendedProducts"
        products={productRecommendations}
      />
    </>
  );
}
