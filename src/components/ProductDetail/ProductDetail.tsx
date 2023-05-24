import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/products.type";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const selectedVariant = product.variants?.edges[0]?.node;

  const { currencyCode, amount } = product.priceRange.minVariantPrice;
  const price = `${currencyCode} ${amount}`;

  return (
    <div className="container px-4 md:px-0 grid grid-cols-1 md:grid-cols-5 gap-10 min-h-[600px]">
      <div className="bg-gray-200 md:col-span-3 relative h-[300px] md:h-full">
        <Image
          fill
          alt={selectedVariant?.title ?? product.title}
          className="object-cover z-0"
          src={selectedVariant?.image?.url ?? product.featuredImage.url}
        />
      </div>
      <div className="md:col-span-2 pt-10 flex flex-col">
        <h1 className="text-7xl font-bold text-black">{product.title}</h1>
        <p className="text-gray-800 text-3xl font-bold my-5">{price}</p>
        <p className="text-gray-400 my-5">{product.description}</p>
        <Link
          href="/"
          className="block bg-black text-white w-full py-4 text-center mt-auto"
        >
          Add to cart
        </Link>
      </div>
    </div>
  );
}
