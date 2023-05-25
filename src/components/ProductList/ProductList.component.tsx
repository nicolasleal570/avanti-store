"use client";
import { ProductCard } from "@/components/ProductCard/ProductCard.component";
import { getCollectionByHandle } from "@/services/collections.service";
import { PageInfo } from "@/types/common.types";
import { Product } from "@/types/products.type";
import { useState } from "react";
import { Pagination } from "../Pagination/Pagination";

interface ProductListProps {
  products: Product[];
  pageInfo: PageInfo;
  collectionHandle: string;
}

export function ProductList({
  products: initialProducts,
  pageInfo: initialPageInfo,
  collectionHandle,
}: ProductListProps) {
  const [pageInfo, setPageInfo] = useState<PageInfo>({ ...initialPageInfo });
  const [products, setProducts] = useState<Product[]>([...initialProducts]);

  const handleNextPage = async () => {
    if (!pageInfo.hasNextPage) return;

    try {
      const { products: productsData } = await getCollectionByHandle(
        collectionHandle,
        pageInfo.endCursor
      );

      setPageInfo(productsData.pageInfo);
      setProducts(productsData.edges.map(({ node }) => node));
    } catch (error) {
      console.error({ error });
    }
  };

  const handlePrevPage = async () => {
    if (!pageInfo.hasPreviousPage) return;

    try {
      const { products: productsData } = await getCollectionByHandle(
        collectionHandle,
        undefined,
        pageInfo.startCursor
      );

      setPageInfo(productsData.pageInfo);
      setProducts(productsData.edges.map(({ node }) => node));
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8">
        <Pagination
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          disabledPrevButton={!pageInfo.hasPreviousPage}
          disabledNextButton={!pageInfo.hasNextPage}
        />
      </div>
    </div>
  );
}
