"use client";

import { ChangeEventHandler, useEffect, useState } from "react";
import { ProductList } from "@/components/ProductList/ProductList.component";
import { getProducts } from "@/services/products.service";
import { PageInfo } from "@/types/common.types";
import { Product } from "@/types/products.type";
import { useDebounce } from "@/hooks/useDebounce";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo | undefined>();

  const searchValue = useDebounce<string>(searchQuery);

  const handleProductsFetch = async (query?: string) => {
    if (isLoading) return;

    try {
      setIsLoading(true);

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

  const handleOnTextChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    handleProductsFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchValue) {
      handleProductsFetch(searchValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <>
      <div className="py-10 px-4 sm:px-0 border-b border-gray-300 bg-gray-50">
        <div className="container">
          <label className="block font-medium mb-3">
            Find a product using the title
          </label>
          <input
            name="query"
            className="bg-white w-72 border border-gray-300 min-h-9 px-3 py-2"
            placeholder="Search..."
            onChange={handleOnTextChange}
          />
        </div>
      </div>

      {isLoading ? (
        <div className="container flex items-center justify-center h-28 my-10">
          <h1 className="text-3xl font-medium">Loading...</h1>
        </div>
      ) : (
        <div className="container my-14 px-4 sm:px-0">
          <ProductList products={products} pageInfo={pageInfo} />
        </div>
      )}
    </>
  );
}
