"use client";

import { ChangeEventHandler, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import { useProducts } from "@/hooks/useProducts";
import { ProductList } from "@/components/ProductList/ProductList.component";

export default function Page() {
  const queryParams = useSearchParams();

  const { isLoading, handleSearchProduct, products, pageInfo } = useProducts();

  const [searchQuery, setSearchQuery] = useState(
    queryParams.get("query") ?? ""
  );

  const searchValue = useDebounce<string>(searchQuery);

  const handleOnTextChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    handleSearchProduct(searchValue);
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
            value={searchQuery}
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
