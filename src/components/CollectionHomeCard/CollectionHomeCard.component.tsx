import Link from "next/link";
import Image from "next/image";
import { Collection } from "@/types/collections.type";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface CollectionHomeCardProps {
  collection: Collection;
}

export function CollectionHomeCard({ collection }: CollectionHomeCardProps) {
  return (
    <div className="h-full rounded relative overflow-hidden flex items-center">
      <span className="sr-only">{collection.title}</span>
      <Image
        fill
        alt={collection.title}
        className="object-cover z-0"
        src={collection.image.url}
      />

      <div className="bg-black bg-opacity-50 w-full h-full z-10 text-white flex p-4">
        <Link
          data-cy={collection.title}
          href={`/collections/${collection.handle}`}
          className="flex items-center justify-between border border-gray-200 rounded bg-gray-50 px-4 py-2 text-gray-600 mt-auto ml-auto"
        >
          {collection.title}
          <ArrowRightIcon className="w-4 h-4 ml-2 mt-0.5" />
        </Link>
      </div>
    </div>
  );
}
