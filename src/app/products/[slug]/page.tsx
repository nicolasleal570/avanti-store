import { ProductDetail } from "@/components/ProductDetail/ProductDetail";
import { ProductsSection } from "@/components/ProductsSection/ProductsSection.component";
import { getProductByHandle, getProducts } from "@/services/products.service";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const slug = params.slug as string;
  const { product } = await getProductByHandle(slug);
  const { products: recommendedProducts } = await getProducts(6);

  return (
    <>
      <ProductDetail product={product} />
      <ProductsSection
        title="Recommended products"
        products={recommendedProducts.edges.map((item) => item.node)}
      />
    </>
  );
}
