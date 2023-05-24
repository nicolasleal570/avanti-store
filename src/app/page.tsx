import { Banner } from "@/components/Banner/Banner.component";
import { CustomerExperienceBanner } from "@/components/CustomerExperienceBanner/CustomerExperienceBanner.component";
import { ProductsSection } from "@/components/ProductsSection/ProductsSection.component";
import { getCollections } from "@/services/collections.service";

export default async function Page() {
  const { collections } = await getCollections(3);

  return (
    <main className="">
      <Banner collections={collections.edges.map((item) => item.node)} />

      <CustomerExperienceBanner />

      <ProductsSection />
    </main>
  );
}
