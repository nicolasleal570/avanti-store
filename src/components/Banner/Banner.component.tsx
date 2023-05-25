"use client";
import Link from "next/link";
import { Collection } from "@/types/collections.type";
import { CollectionHomeCard } from "../CollectionHomeCard/CollectionHomeCard.component";

interface BannerProps {
  collections: Collection[];
}

export function Banner({ collections }: BannerProps) {
  const [largeCollection, smallFirstCollection, smallSecondCollection] =
    collections;

  return (
    <div className="bg-bg-gray-100 md:py-12 p-4 md:px-0">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-4 min-h-[300px]">
        <div className="md:col-span-2 md:row-span-2 h-[200px] md:h-full">
          <CollectionHomeCard collection={largeCollection} />
        </div>

        <div className="bg-bg-gray-100 rounded h-[200px]">
          <CollectionHomeCard collection={smallFirstCollection} />
        </div>

        <div className="bg-bg-gray-100 rounded h-[200px]">
          <CollectionHomeCard collection={smallSecondCollection} />
        </div>

        <div className="row-start-3 md:row-start-auto md:col-span-2 p-7">
          <h3 className="text-2xl mb-10 font-light">
            Discover the style that defines you <br />{" "}
            <span className="font-serif italic underline font-semibold">
              in an exceptional place
            </span>
            .
          </h3>

          <div className="flex items-center flex-col-reverse md:flex-row">
            <Link
              href="/"
              className="bg-black text-white px-6 py-2.5 rounded mt-10 md:mt-0 md:mr-10 text-lg"
            >
              Shop now
            </Link>

            <p className="flex-1 font-light">
              Our exclusive collection is meticulously designed for the modern
              urban dweller, capturing the essence of luxury and sophistication
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
