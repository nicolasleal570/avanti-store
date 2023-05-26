import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/products.type";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { currencyCode, amount } = product.priceRange.minVariantPrice;
  const price = `${currencyCode} ${amount}`;

  const productUrl = `/products/${product.handle}`;

  return (
    <div className="">
      <Link
        href={productUrl}
        className="h-96 rounded relative overflow-hidden flex items-center bg-gray-100"
      >
        <Image
          fill
          alt={product.title}
          className="object-cover z-0"
          src={product.featuredImage.url}
        />
      </Link>

      <div className="flex items-center justify-between mt-5">
        <div className="flex-1">
          <Link
            data-cy={productUrl}
            href={productUrl}
            className="block flex-1 text-xl font-light"
          >
            {product.title}
          </Link>
          <p className="font-semibold text-sm">{price}</p>
        </div>

        <Link href="/" className="bg-gray-900 text-white p-2.5 rounded-md">
          <ShoppingCartIcon className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
