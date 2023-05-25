import { ProductList } from "@/components/ProductList/ProductList.component";
import { getCollectionByHandle } from "@/services/collections.service";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { products, title, description } = await getCollectionByHandle(
    params.slug
  );

  return (
    <div className="container py-10">
      <h1
        className={`text-7xl font-bold text-gray-900 ${
          !description ? "mb-14" : ""
        }`}
      >{`${title} Collection`}</h1>

      {description && (
        <p className="text-gray-400 text-xl mb-14 ">{description}</p>
      )}

      <ProductList
        pageInfo={products.pageInfo}
        collectionHandle={params.slug}
        products={products.edges.map(({ node }) => node)}
      />
    </div>
  );
}
