"use client";
import { ProductCard } from "@/components/ProductCard/ProductCard.component";
import { getCollectionByHandle } from "@/services/collections.service";
import { PageInfo } from "@/types/common.types";
import { Product } from "@/types/products.type";
import { useState } from "react";
import { Pagination } from "../Pagination/Pagination";
import { getProducts } from "@/services/products.service";

interface ProductListProps {
  products: Product[];
  pageInfo?: PageInfo;
  collectionHandle?: string;
}

export function ProductList({
  products: initialProducts,
  pageInfo: initialPageInfo,
  collectionHandle,
}: ProductListProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [pageInfo, setPageInfo] = useState<PageInfo | undefined>(
    initialPageInfo
  );
  const [products, setProducts] = useState<Product[]>([...initialProducts]);

  const handleNextPage = async () => {
    if (!pageInfo?.hasNextPage || isLoading) return;

    setIsLoading(true);

    try {
      if (collectionHandle) {
        const { products: productsData } = await getCollectionByHandle(
          collectionHandle,
          pageInfo.endCursor
        );

        if (productsData) {
          setPageInfo(productsData.pageInfo);
          setProducts(productsData.edges.map(({ node }) => node));
        }

        return;
      }

      const { products: productsData } = await getProducts(
        5,
        pageInfo.endCursor
      );

      setPageInfo(productsData.pageInfo);
      setProducts(productsData.edges.map(({ node }) => node));
    } catch (error) {
      console.error({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrevPage = async () => {
    if (!pageInfo?.hasPreviousPage || isLoading) return;

    setIsLoading(true);

    try {
      if (collectionHandle) {
        const { products: productsData } = await getCollectionByHandle(
          collectionHandle,
          undefined,
          pageInfo.startCursor
        );

        if (productsData) {
          setPageInfo(productsData.pageInfo);
          setProducts(productsData.edges.map(({ node }) => node));
        }
        return;
      }

      const { products: productsData } = await getProducts(
        5,
        undefined,
        pageInfo.startCursor
      );

      setPageInfo(productsData.pageInfo);
      setProducts(productsData.edges.map(({ node }) => node));
    } catch (error) {
      console.error({ error });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div
        id="productsList"
        data-cy="productsList"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {pageInfo && (
        <div className="mt-8">
          <Pagination
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            disabledPrevButton={!pageInfo.hasPreviousPage}
            disabledNextButton={!pageInfo.hasNextPage}
          />
        </div>
      )}
    </div>
  );
}
