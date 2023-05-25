import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { PageInfo } from "@/types/common.types";
import { Product } from "@/types/products.type";
import { getProducts } from "@/services/products.service";

export function useProducts() {
  const router = useRouter();
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo | undefined>();

  const handleSearchProduct = async (query?: string) => {
    if (isLoading) return;

    try {
      setIsLoading(true);

      const url = `${pathname}${query ? `?query=${query}` : ""}`;
      router.push(url);

      const { products: productsData } = await getProducts(
        5,
        undefined,
        undefined,
        query
      );

      setProducts(productsData.edges.map(({ node }) => node));
      setPageInfo(productsData.pageInfo);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    setIsLoading,
    products,
    setProducts,
    pageInfo,
    setPageInfo,
    handleSearchProduct,
  };
}
