import { Banner } from "@/components/Banner/Banner.component";
import { CustomerExperienceBanner } from "@/components/CustomerExperienceBanner/CustomerExperienceBanner.component";
import { ProductsSection } from "@/components/ProductsSection/ProductsSection.component";
import { getCollections } from "@/services/collections.service";
import { getProducts } from "@/services/products.service";

export default async function Page() {
  const [collectionsData, productsData] = await Promise.all([
    getCollections(3),
    getProducts(3),
  ]);

  const { collections } = collectionsData ?? {};
  const { products } = productsData ?? {};

  return (
    <main className="">
      <Banner collections={collections.edges.map((item) => item.node)} />

      <CustomerExperienceBanner />

      <ProductsSection
        title="Featured products"
        products={products.edges.map((item) => item.node)}
      />
    </main>
  );
}
